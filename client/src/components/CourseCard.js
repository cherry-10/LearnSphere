import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Clock, ArrowRight } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {course.level}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {course.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.shortDescription}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{course.enrolledStudents.toLocaleString()} learners</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              ₹{(course.price / 100).toLocaleString()}
            </span>
          </div>
          <Link
            to={`/courses/${course.id}`}
            className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors group"
          >
            <span>View Course</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
