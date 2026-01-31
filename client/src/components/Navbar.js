import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, User, BookOpen, Settings, HelpCircle, LogOut } from 'lucide-react';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setProfileMenuOpen(false);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src="/logo.png" alt="Learn Sphere" className="h-10 w-10" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Learn Sphere
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Courses
            </Link>
            {isAuthenticated && (
              <Link
                to="/my-courses"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                My Courses
              </Link>
            )}
            <Link
              to="/help"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Help
            </Link>
          </div>

          {/* Right Side - Auth Buttons or Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-700">{user?.name}</span>
                </button>

                {/* Profile Dropdown */}
                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    <Link
                      to="/profile"
                      onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      <User className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-700">Profile</span>
                    </Link>
                    <Link
                      to="/my-courses"
                      onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      <BookOpen className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-700">My Courses</span>
                    </Link>
                    <Link
                      to="/settings"
                      onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      <Settings className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-700">Settings</span>
                    </Link>
                    <Link
                      to="/help"
                      onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      <HelpCircle className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-700">Help Center</span>
                    </Link>
                    <hr className="my-2" />
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors w-full text-left text-red-600"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-blue-600 font-medium"
            >
              Courses
            </Link>
            {isAuthenticated && (
              <>
                <Link
                  to="/my-courses"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  My Courses
                </Link>
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  Settings
                </Link>
              </>
            )}
            <Link
              to="/help"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-blue-600 font-medium"
            >
              Help
            </Link>
            {isAuthenticated ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-red-600 font-medium"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-blue-600 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium text-center"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
