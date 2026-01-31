const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const coursesData = require('../data/courses');

// @route   GET /api/courses
// @desc    Get all courses
// @access  Public
router.get('/', (req, res) => {
  try {
    res.json(coursesData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/courses/:id
// @desc    Get course by ID
// @access  Public
router.get('/:id', (req, res) => {
  try {
    const course = coursesData.find(c => c.id === req.params.id);
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/courses/:id/enroll
// @desc    Enroll in a course
// @access  Private
router.post('/:id/enroll', auth, async (req, res) => {
  try {
    const courseId = req.params.id;
    const userId = req.user._id;

    // Check if course exists
    const course = coursesData.find(c => c.id === courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Get user
    const user = await User.findById(userId);

    // Check if already enrolled
    const alreadyEnrolled = user.enrolledCourses.some(
      ec => ec.courseId === courseId
    );

    if (alreadyEnrolled) {
      return res.status(400).json({ message: 'Already enrolled in this course' });
    }

    // Enroll user
    user.enrolledCourses.push({
      courseId,
      enrolledAt: Date.now(),
      progress: 0,
      completed: false,
    });

    await user.save();

    res.json({
      message: 'Successfully enrolled in course',
      enrolledCourse: user.enrolledCourses[user.enrolledCourses.length - 1],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
