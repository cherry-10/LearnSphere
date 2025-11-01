import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Award, Play, Download, Clock, CheckCircle } from 'lucide-react';

const MyCoursesPage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  const fetchEnrolledCourses = async () => {
    try {
      const response = await axios.get('/api/user/enrolled');
      setEnrolledCourses(response.data);
    } catch (error) {
      console.error('Error fetching enrolled courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProgress = async (courseId, newProgress) => {
    try {
      await axios.put(`/api/user/progress/${courseId}`, { progress: newProgress });
      fetchEnrolledCourses();
    } catch (error) {
      console.error('Error updating progress:', error);
    }
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">My Courses</h1>
          <p className="text-lg text-gray-600">
            Continue your learning journey. You have {enrolledCourses.length} course{enrolledCourses.length !== 1 ? 's' : ''} in progress.
          </p>
        </div>

        {enrolledCourses.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <BookOpen className="h-20 w-20 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No Courses Yet</h2>
            <p className="text-gray-600 mb-6">Start learning by enrolling in a course</p>
            <Link
              to="/courses"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {enrolledCourses.map((enrolled) => {
              const course = enrolled.courseDetails;
              if (!course) return null;

              return (
                <div key={enrolled.courseId} className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
                    {/* Course Image */}
                    <div className="lg:col-span-1">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-48 lg:h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Course Info */}
                    <div className="lg:col-span-3">
                      <div className="flex flex-col h-full">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                                {course.category}
                              </span>
                            </div>
                            {enrolled.completed && (
                              <span className="inline-flex items-center space-x-1 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                                <CheckCircle className="h-4 w-4" />
                                <span>Completed</span>
                              </span>
                            )}
                          </div>

                          <h2 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h2>
                          <p className="text-gray-600 mb-4 line-clamp-2">{course.shortDescription}</p>

                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <BookOpen className="h-4 w-4" />
                              <span>{course.modules?.length || 0} modules</span>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">Progress</span>
                              <span className="text-sm font-bold text-blue-600">{enrolled.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div
                                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                                style={{ width: `${enrolled.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link
                            to={`/courses/${course.id}`}
                            className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
                          >
                            <Play className="h-5 w-5 mr-2" />
                            {enrolled.progress > 0 ? 'Continue Learning' : 'Start Learning'}
                          </Link>
                          
                          {enrolled.completed && (
                            <button className="flex-1 inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-all shadow-md hover:shadow-lg">
                              <Download className="h-5 w-5 mr-2" />
                              Download Certificate
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Stats Section */}
        {enrolledCourses.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900 mb-1">{enrolledCourses.length}</p>
              <p className="text-gray-600">Courses Enrolled</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900 mb-1">
                {enrolledCourses.filter(e => e.completed).length}
              </p>
              <p className="text-gray-600">Courses Completed</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900 mb-1">
                {enrolledCourses.filter(e => e.completed).length}
              </p>
              <p className="text-gray-600">Certificates Earned</p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyCoursesPage;
