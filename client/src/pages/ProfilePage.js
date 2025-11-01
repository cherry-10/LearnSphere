import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Calendar, Award, BookOpen, Edit2, Save, X, Phone, GraduationCap, Building2 } from 'lucide-react';

const ProfilePage = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
    university: '',
    courseStudying: '',
    phoneNumber: '',
    bio: ''
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get('/api/user/profile');
      setProfile(response.data);
      setFormData({
        name: response.data.name || '',
        email: response.data.email || '',
        education: response.data.education || '',
        university: response.data.university || '',
        courseStudying: response.data.courseStudying || '',
        phoneNumber: response.data.phoneNumber || '',
        bio: response.data.bio || ''
      });
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await axios.put('/api/user/profile', formData);
      await fetchProfile();
      setEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: profile.name || '',
      email: profile.email || '',
      education: profile.education || '',
      university: profile.university || '',
      courseStudying: profile.courseStudying || '',
      phoneNumber: profile.phoneNumber || '',
      bio: profile.bio || ''
    });
    setEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{profile?.name}</h1>
              <p className="text-gray-600 mb-4">{profile?.email}</p>
              {!editing ? (
                <button 
                  onClick={() => setEditing(true)}
                  className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {saving ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button
                    onClick={handleCancel}
                    className="inline-flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <BookOpen className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900">{profile?.enrolledCourses?.length || 0}</p>
            <p className="text-gray-600">Enrolled Courses</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Award className="h-10 w-10 text-green-600 mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900">
              {profile?.enrolledCourses?.filter(c => c.completed).length || 0}
            </p>
            <p className="text-gray-600">Certificates</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Calendar className="h-10 w-10 text-purple-600 mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900">
              {new Date(profile?.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
            </p>
            <p className="text-gray-600">Member Since</p>
          </div>
        </div>

        {/* Profile Details - Editable */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="h-4 w-4 mr-2" />
                Full Name
              </label>
              {editing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900">{profile?.name || 'Not provided'}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Mail className="h-4 w-4 mr-2" />
                Email Address
              </label>
              <p className="text-gray-900">{profile?.email}</p>
              <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Phone className="h-4 w-4 mr-2" />
                Phone Number
              </label>
              {editing ? (
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900">{profile?.phoneNumber || 'Not provided'}</p>
              )}
            </div>

            {/* Education */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <GraduationCap className="h-4 w-4 mr-2" />
                Education Level
              </label>
              {editing ? (
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select education level</option>
                  <option value="High School">High School</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="PhD">PhD</option>
                  <option value="Other">Other</option>
                </select>
              ) : (
                <p className="text-gray-900">{profile?.education || 'Not provided'}</p>
              )}
            </div>

            {/* University */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Building2 className="h-4 w-4 mr-2" />
                University/College
              </label>
              {editing ? (
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  placeholder="Enter your university name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900">{profile?.university || 'Not provided'}</p>
              )}
            </div>

            {/* Course Studying */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <BookOpen className="h-4 w-4 mr-2" />
                Course/Major
              </label>
              {editing ? (
                <input
                  type="text"
                  name="courseStudying"
                  value={formData.courseStudying}
                  onChange={handleInputChange}
                  placeholder="e.g., Computer Science, Business Administration"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900">{profile?.courseStudying || 'Not provided'}</p>
              )}
            </div>

            {/* Bio */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="h-4 w-4 mr-2" />
                Bio
              </label>
              {editing ? (
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Tell us about yourself..."
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900">{profile?.bio || 'Not provided'}</p>
              )}
            </div>

            {/* Member Since */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                Member Since
              </label>
              <p className="text-gray-900">
                {new Date(profile?.createdAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
