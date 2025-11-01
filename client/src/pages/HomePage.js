import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Users, Award, Star, BookOpen, TrendingUp, Globe } from 'lucide-react';

const HomePage = () => {
  const stats = [
    { icon: Users, label: 'Total Learners', value: '150,000+' },
    { icon: Award, label: 'Years of Experience', value: '7+' },
    { icon: Star, label: 'Overall Rating', value: '4.9/5' },
    { icon: BookOpen, label: 'Courses Available', value: '100+' },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'Industry-Relevant Skills',
      description: 'Learn skills that are in high demand and stay ahead in your career.',
    },
    {
      icon: Award,
      title: 'Certified Programs',
      description: 'Get industry-recognized certificates upon course completion.',
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry experts and experienced professionals.',
    },
    {
      icon: Globe,
      title: 'Learn Anywhere',
      description: 'Access courses from anywhere, anytime at your own pace.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute transform rotate-45 bg-blue-500 opacity-20 -right-64 -top-64 w-96 h-96 rounded-full"></div>
          <div className="absolute transform -rotate-45 bg-blue-400 opacity-20 -left-48 -bottom-48 w-80 h-80 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center lg:text-left lg:max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Empower Your Career with{' '}
              <span className="text-blue-200">Learn Sphere</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 animate-slide-up">
              Access world-class courses in AI, Data Science, Programming, and more. 
              Start learning today and transform your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl group"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-all border-2 border-white"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 card-hover"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Learn Sphere?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the best learning experience with industry-relevant courses and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md card-hover text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of learners worldwide and gain skills that matter.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
          >
            Start Learning Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
