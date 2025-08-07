import React, { useState } from 'react';
import { Clock, Users, Star, ArrowRight, User, ChevronDown, BookOpen, LogOut, Home, Phone, GraduationCap } from 'lucide-react';
import { Link,useNavigate } from 'react-router-dom';
const LoggedInHome = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('C');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate=useNavigate();
  
  // Mock user data - in real app this would come from props or context
  const user = { name: 'user', email: 'user@example.com' };
  
  const handleViewCourse = (courseId) => {
    console.log(`Navigate to course: ${courseId}`);
    // navigate(`/coursedescription/${courseId}`);
  };

  const handleMyLearning = () => {
    console.log('Navigate to My Learning');
    setIsDropdownOpen(false);
    // navigate('/my-learning');
  };

  const handleLogout = () => {
    console.log('Logout user');
    setIsDropdownOpen(false);
    // Clear user session and navigate to login
  };

  const handleNavigation = (path) => {
    console.log(`Navigate to: ${path}`);
    navigate(path);
  };

  const handleLanguageFilter = (language) => {
    setSelectedLanguage(language);
  };

  

  const allCourses = {
    'C': [
      {
        id: 'c-programming',
        title: 'C Programming',
        subtitle: 'Comprehensive C language course designed for you, regardless of your programming background',
        lessons: '6x Lessons',
        level: 'Beginner',
        rating: 4.8,
        students: '12.5k',
        icon: '🔵',
        gradient: 'from-blue-500 to-purple-600',
      },
      {
        id: 'basic-c',
        title: 'Basic Coding in C',
        subtitle: 'The Basic Coding in C course is designed for beginners in programming. It focuses on core concepts',
        lessons: '2x Lessons',
        level: 'Beginner',
        rating: 4.7,
        students: '8.2k',
        icon: '🔵',
        gradient: 'from-blue-500 to-purple-600',
      },
      {
        id: 'intermediate-c',
        title: 'Intermediate Coding in C',
        subtitle: 'The Intermediate Coding in C course is tailored for you with a basic coding foundation',
        lessons: '5x Lessons',
        level: 'Intermediate',
        rating: 4.9,
        students: '5.8k',
        icon: '🔵',
        gradient: 'from-blue-500 to-purple-600',
      },
      {
        id: 'dsa-c',
        title: 'DSA in C',
        subtitle: 'Data Structures and Algorithms (DSA) in C is a fundamental course that explores the core concepts',
        lessons: '11x Lessons',
        level: 'Advanced',
        rating: 4.9,
        students: '3.2k',
        icon: '🔵',
        gradient: 'from-blue-500 to-purple-600',
      }
    ],
    'CPP': [
      {
        id: 'cpp-fundamentals',
        title: 'C++ Fundamentals',
        subtitle: 'Master the fundamentals of C++ programming with object-oriented concepts and modern features',
        lessons: '8x Lessons',
        level: 'Beginner',
        rating: 4.8,
        students: '10.2k',
        icon: '🟦',
        gradient: 'from-indigo-500 to-blue-600',
      },
      {
        id: 'advanced-cpp',
        title: 'Advanced C++',
        subtitle: 'Deep dive into advanced C++ concepts including templates, STL, and memory management',
        lessons: '12x Lessons',
        level: 'Advanced',
        rating: 4.9,
        students: '6.8k',
        icon: '🟦',
        gradient: 'from-indigo-500 to-blue-600',
      },
      {
        id: 'cpp-oop',
        title: 'C++ Object-Oriented Programming',
        subtitle: 'Learn object-oriented programming principles using C++ with practical examples and projects',
        lessons: '7x Lessons',
        level: 'Intermediate',
        rating: 4.7,
        students: '8.9k',
        icon: '🟦',
        gradient: 'from-indigo-500 to-blue-600',
      },
      {
        id: 'cpp-dsa',
        title: 'DSA in C++',
        subtitle: 'Comprehensive data structures and algorithms course using C++ with competitive programming focus',
        lessons: '15x Lessons',
        level: 'Advanced',
        rating: 4.9,
        students: '4.5k',
        icon: '🟦',
        gradient: 'from-indigo-500 to-blue-600',
      }
    ],
    'Java': [
      {
        id: 'java-basics',
        title: 'Java Fundamentals',
        subtitle: 'Start your Java journey with core concepts, syntax, and object-oriented programming principles',
        lessons: '10x Lessons',
        level: 'Beginner',
        rating: 4.8,
        students: '18.3k',
        icon: '☕',
        gradient: 'from-orange-500 to-red-600',
      },
      {
        id: 'java-spring',
        title: 'Spring Framework',
        subtitle: 'Master enterprise Java development with Spring Boot, Spring MVC, and microservices architecture',
        lessons: '16x Lessons',
        level: 'Advanced',
        rating: 4.9,
        students: '12.1k',
        icon: '🍃',
        gradient: 'from-orange-500 to-red-600',
      },
      {
        id: 'java-collections',
        title: 'Java Collections & Streams',
        subtitle: 'Deep dive into Java Collections Framework, Lambda expressions, and Stream API',
        lessons: '6x Lessons',
        level: 'Intermediate',
        rating: 4.7,
        students: '9.6k',
        icon: '📚',
        gradient: 'from-orange-500 to-red-600',
      },
      {
        id: 'java-microservices',
        title: 'Java Microservices',
        subtitle: 'Build scalable microservices architecture using Java, Spring Cloud, and Docker',
        lessons: '14x Lessons',
        level: 'Advanced',
        rating: 4.8,
        students: '7.2k',
        icon: '🏗️',
        gradient: 'from-orange-500 to-red-600',
      }
    ],
    'Python': [
      {
        id: 'python-basics',
        title: 'Python for Beginners',
        subtitle: 'Learn Python programming from scratch with hands-on projects and practical examples',
        lessons: '8x Lessons',
        level: 'Beginner',
        rating: 4.9,
        students: '25.4k',
        icon: '🐍',
        gradient: 'from-green-500 to-emerald-600',
      },
      {
        id: 'python-django',
        title: 'Django Web Development',
        subtitle: 'Build powerful web applications using Django framework with REST APIs and database integration',
        lessons: '12x Lessons',
        level: 'Intermediate',
        rating: 4.8,
        students: '14.7k',
        icon: '🌐',
        gradient: 'from-green-500 to-emerald-600',
      },
      {
        id: 'python-data-science',
        title: 'Python for Data Science',
        subtitle: 'Master data analysis, visualization, and machine learning using Python, Pandas, and NumPy',
        lessons: '18x Lessons',
        level: 'Advanced',
        rating: 4.9,
        students: '16.8k',
        icon: '📊',
        gradient: 'from-green-500 to-emerald-600',
      },
      {
        id: 'python-ml',
        title: 'Machine Learning with Python',
        subtitle: 'Comprehensive machine learning course using Python, scikit-learn, and TensorFlow',
        lessons: '20x Lessons',
        level: 'Advanced',
        rating: 4.9,
        students: '11.3k',
        icon: '🤖',
        gradient: 'from-green-500 to-emerald-600',
      }
    ]
  };

  const webDevCourses = [
    {
      id: 'fullstack-mern',
      title: 'Full Stack Web Development MERN Stack',
      subtitle: 'Embark on a comprehensive Full Stack Web Development journey with our MERN Stack course',
      lessons: '13x Lessons',
      level: 'Advanced',
      rating: 4.9,
      students: '15.7k',
      icon: '⚛️',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      id: 'css-course',
      title: 'CSS',
      subtitle: 'Embark on a transformative journey into MERN Stack with our CSS course. Delve into styling fundamentals',
      lessons: '1x Lessons',
      level: 'Beginner',
      rating: 4.6,
      students: '22.1k',
      icon: '🎨',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      id: 'flexbox',
      title: 'Flexbox',
      subtitle: 'Embark on a flexible learning journey with our self-paced Flexbox course, offering intuitive layout solutions',
      lessons: '1x Lessons',
      level: 'Intermediate',
      rating: 4.8,
      students: '18.3k',
      icon: '📱',
      gradient: 'from-pink-500 to-red-500',
    },
    {
      id: 'javascript-es6',
      title: 'JavaScript ES6',
      subtitle: 'Embark on a Node.js journey with our MERN Stack course. Engage in self-paced videos and projects',
      lessons: '1x Lessons',
      level: 'Intermediate',
      rating: 4.7,
      students: '19.5k',
      icon: '🟨',
      gradient: 'from-green-500 to-emerald-500',
    }
  ];

  const CourseCard = ({ course }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      <div className={`h-32 bg-gradient-to-br ${course.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="absolute top-4 left-4">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-3 py-1">
            <span className="text-white font-medium text-sm">{course.level}</span>
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <div className="text-4xl opacity-80">{course.icon}</div>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
            {course.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {course.subtitle}
          </p>
        </div>
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.lessons}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{course.students}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{course.rating}</span>
          </div>
        </div>
        <button
          onClick={() => handleViewCourse(course.id)}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2"
        >
          <span>View Course</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const languages = ['C', 'CPP', 'Java', 'Python'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      
     
      {/* Main Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* LearnHub Logo */}
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-purple-600">
                <img src="src/assetslogo2.png" alt="LearnHub Logo" />
              </h1>
            </div>
            
            {/* Navigation Links and User Dropdown */}
            <div className="flex items-center space-x-8">
              {/* Navigation Links */}
              <nav className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => handleNavigation('/')}
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </button>
                
                <button
                  onClick={() => handleNavigation('/courses')}
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Courses</span>
                </button>
                
                <button
                  onClick={() => handleNavigation('/contact')}
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact</span>
                </button>
              </nav>

              {/* User Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-3 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="font-medium hidden sm:block">{user.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-800">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    
                    <button
                      onClick={handleMyLearning}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>My Learning</span>
                    </button>
                    
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
            <nav className="flex items-center justify-center space-x-8">
              <button
                onClick={() => handleNavigation('/home')}
                className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              
              <button
                onClick={() => handleNavigation('/courses')}
                className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Courses</span>
              </button>
              
              <button
                onClick={() => handleNavigation('/contact')}
                className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">{user.name.split(' ')[0]}!</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Continue</span>
                <br />
                <span className="text-gray-800">Your Learning Journey</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover new courses, continue your progress, and master new skills to advance your career.
              </p>
            </div>
            <button
              onClick={handleMyLearning}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Continue Learning
            </button>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 overflow-hidden mx-auto max-w-md lg:max-w-none">
              <img
                src="https://www.clickvieweducation.com/_next/image?url=https%3A%2F%2Fcms.clickvieweducation.com%2Fwp-content%2Fuploads%2F2024%2F10%2FHow-to-Teach-Good-Study-Habits.png&w=3840&q=100"
                alt="Educational Platform - Students Learning"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl"
              />
            </div>
            <div className="hidden sm:block absolute -top-4 -right-4 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-30 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Programming Courses Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Programming</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Learn fundamental and advanced concepts of high-demand programming languages with ease!
          </p>
          <div className="flex justify-center flex-wrap gap-2 sm:gap-4">
            {languages.map((language) => (
              <button
                key={language}
                onClick={() => handleLanguageFilter(language)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedLanguage === language
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {allCourses[selectedLanguage]?.map((course) => (
            <CourseCard key={course.id} course={course} />
          )) || (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No courses available for {selectedLanguage}</p>
            </div>
          )}
        </div>
      </div>

      {/* Full Stack Web Dev Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Web Development</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Secure your dream role with confidence, thoughtful answers, and our interview prep resources.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {webDevCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Explore More Courses
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Expand your skillset with our comprehensive library of courses across different technologies.
          </p>
          <button
            onClick={() => console.log('Navigate to all courses')}
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Browse All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoggedInHome;