import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { Star, Clock, Award, CheckCircle, BookOpen, Play } from 'lucide-react';

const CourseInfoPage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  const fetchCourse = async () => {
    try {
      const response = await axios.get(`/api/courses/${courseId}`);
      setCourse(response.data);
    } catch (error) {
      console.error('Error fetching course:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEnroll = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    setEnrolling(true);
    try {
      await axios.post(`/api/courses/${courseId}/enroll`);
      alert('Successfully enrolled in the course!');
      navigate('/my-courses');
    } catch (error) {
      alert(error.response?.data?.message || 'Enrollment failed');
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Course not found</h2>
          <button onClick={() => navigate('/courses')} className="text-blue-600 hover:text-blue-700">
            Back to courses
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'modules', label: 'Modules' },
    { id: 'projects', label: 'Projects' },
    { id: 'certification', label: 'Certification' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Course Info */}
            <div className="lg:col-span-2">
              <div className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {course.category}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-blue-100 mb-6">{course.description}</p>

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-blue-200">({course.enrolledStudents.toLocaleString()} learners)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>{course.level}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <img
                  src={`https://ui-avatars.com/api/?name=${course.instructor}&background=3b82f6&color=fff`}
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-sm text-blue-200">Instructor</p>
                  <p className="font-semibold">{course.instructor}</p>
                </div>
              </div>
            </div>

            {/* Right: Enroll Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-bold">₹{(course.price / 100).toLocaleString()}</span>
                    <span className="ml-2 text-gray-500 line-through">₹{((course.price * 1.5) / 100).toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-green-600 font-semibold">33% OFF - Limited time offer</p>
                </div>
                <button
                  onClick={handleEnroll}
                  disabled={enrolling}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl mb-3 disabled:opacity-50"
                >
                  {enrolling ? 'Enrolling...' : 'Enroll Now'}
                </button>
                <p className="text-center text-sm text-gray-600 mb-4">30-day money-back guarantee</p>
                <div className="border-t pt-4">
                  <p className="font-semibold mb-3">This course includes:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>{course.modules?.length || 0} comprehensive modules</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Hands-on projects and assignments</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Industry-recognized certificate</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Lifetime access to course materials</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>24/7 community support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 border-b border-gray-200">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Course</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{course.description}</p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.learningOutcomes?.map((outcome, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              {/* Prerequisites */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prerequisites</h3>
                <ul className="space-y-2">
                  {course.prerequisites?.map((prereq, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <BookOpen className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'modules' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Modules</h2>
            <div className="space-y-4">
              {course.modules?.map((module, index) => (
                <div key={module.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{module.title}</h3>
                      <div className="mb-3">
                        <p className="text-sm text-gray-600 font-semibold mb-1">Topics:</p>
                        <ul className="flex flex-wrap gap-2">
                          {module.topics?.map((topic, idx) => (
                            <li key={idx} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {module.handsOn && (
                        <div className="flex items-start space-x-2 bg-green-50 p-3 rounded-lg">
                          <Play className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-green-900">Hands-on Exercise</p>
                            <p className="text-sm text-green-700">{module.handsOn}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.projects?.map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Project {index + 1}</h3>
                  </div>
                  <p className="text-gray-700">{project}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'certification' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="max-w-3xl mx-auto text-center">
              <Award className="h-20 w-20 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Certified</h2>
              <p className="text-xl text-gray-700 mb-6">{course.certification}</p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Certification Includes:</h3>
                <ul className="space-y-3 text-left max-w-md mx-auto">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Industry-recognized certificate of completion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Shareable on LinkedIn and other platforms</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Verification of your skills and knowledge</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Career advancement opportunities</span>
                  </li>
                </ul>
              </div>
              {course.assessment && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">To Earn Your Certificate:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">{course.assessment.quizzes}</p>
                      <p className="text-sm text-gray-600">Quizzes</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">{course.assessment.assignments}</p>
                      <p className="text-sm text-gray-600">Assignments</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">1</p>
                      <p className="text-sm text-gray-600">Final Project</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">{course.assessment.passingScore}%</p>
                      <p className="text-sm text-gray-600">Passing Score</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CourseInfoPage;
