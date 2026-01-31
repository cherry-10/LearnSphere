const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const coursesData = require('../data/courses');

// @route   GET /api/user/enrolled
// @desc    Get user's enrolled courses
// @access  Private
router.get('/enrolled', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    // Get full course details for enrolled courses
    const enrolledCoursesWithDetails = user.enrolledCourses.map(ec => {
      const courseData = coursesData.find(c => c.id === ec.courseId);
      return {
        ...ec.toObject(),
        courseDetails: courseData,
      };
    });

    res.json(enrolledCoursesWithDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/user/progress/:courseId
// @desc    Update course progress
// @access  Private
router.put('/progress/:courseId', auth, async (req, res) => {
  try {
    const { courseId } = req.params;
    const { progress } = req.body;

    if (progress < 0 || progress > 100) {
      return res.status(400).json({ message: 'Progress must be between 0 and 100' });
    }

    const user = await User.findById(req.user._id);

    const enrolledCourse = user.enrolledCourses.find(
      ec => ec.courseId === courseId
    );

    if (!enrolledCourse) {
      return res.status(404).json({ message: 'Not enrolled in this course' });
    }

    enrolledCourse.progress = progress;
    enrolledCourse.lastAccessedAt = Date.now();
    
    if (progress >= 100) {
      enrolledCourse.completed = true;
    }

    await user.save();

    res.json({
      message: 'Progress updated successfully',
      enrolledCourse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/user/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/user/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', auth, async (req, res) => {
  try {
    const { name, education, university, courseStudying, phoneNumber, bio } = req.body;
    const user = await User.findById(req.user._id);

    // Update allowed fields
    if (name) user.name = name;
    if (education !== undefined) user.education = education;
    if (university !== undefined) user.university = university;
    if (courseStudying !== undefined) user.courseStudying = courseStudying;
    if (phoneNumber !== undefined) user.phoneNumber = phoneNumber;
    if (bio !== undefined) user.bio = bio;

    await user.save();

    // Return updated user without password
    const updatedUser = await User.findById(user._id).select('-password');

    res.json({
      message: 'Profile updated successfully',
      ...updatedUser.toObject()
    });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
