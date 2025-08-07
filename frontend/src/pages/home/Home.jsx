import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const Home = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('C');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleGetStarted = () => {
    navigate('/courses');
  };

  const handleViewCourse = (courseId) => {
    navigate(`/coursedescription/${courseId}`);
  };

  const handleLanguageFilter = (language) => {
    setSelectedLanguage(language);
  };

  // allCourses and webDevCourses remain unchanged...
  // ✂️ Truncated here for brevity (you already provided the full object)
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
        duration: '8h 45m',
        enrolledLearners: '~12,500+',
        description: 'Master the fundamentals of C programming language with this comprehensive course. Learn syntax, data structures, algorithms, and best practices through hands-on projects and real-world examples.',
        careerGrowth: 'Foundation for system programming, embedded systems, and technical interviews'
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
        duration: '4h 20m',
        enrolledLearners: '~8,200+',
        description: 'Start your programming journey with Basic C programming. Learn variables, loops, functions, and basic problem-solving techniques.',
        careerGrowth: 'Entry-level programming positions and technical skill development'
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
        duration: '10h 15m',
        enrolledLearners: '~5,800+',
        description: 'Advance your C programming skills with pointers, memory management, file handling, and advanced data structures.',
        careerGrowth: 'System programming roles and embedded software development'
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
        duration: '18h 30m',
        enrolledLearners: '~3,200+',
        description: 'Master data structures and algorithms using C programming. Cover arrays, linked lists, trees, graphs, sorting, and searching algorithms.',
        careerGrowth: 'Software engineering roles and competitive programming success'
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
        duration: '12h 20m',
        enrolledLearners: '~10,200+',
        description: 'Learn C++ from scratch including OOP concepts, classes, objects, inheritance, polymorphism, and modern C++ features.',
        careerGrowth: 'Software development positions and game programming roles',
        img: 'https://img-c.udemycdn.com/course/750x422/5363556_222c.jpg'
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
        duration: '16h 45m',
        enrolledLearners: '~6,800+',
        description: 'Master advanced C++ topics including templates, STL containers, algorithms, smart pointers, and performance optimization.',
        careerGrowth: 'Senior developer roles and high-performance computing positions',
        img: 'https://img-c.udemycdn.com/course/750x422/5363556_222c.jpg'
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
        duration: '9h 30m',
        enrolledLearners: '~8,900+',
        description: 'Focus on OOP principles in C++ including encapsulation, inheritance, polymorphism, and design patterns.',
        careerGrowth: 'Object-oriented software design and enterprise application development',
        img: 'https://img-c.udemycdn.com/course/750x422/5363556_222c.jpg'
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
        duration: '22h 15m',
        enrolledLearners: '~4,500+',
        description: 'Master DSA using C++ with focus on competitive programming, algorithm optimization, and problem-solving techniques.',
        careerGrowth: 'Competitive programming success and algorithm-focused software roles',
        img: 'https://img-c.udemycdn.com/course/750x422/5363556_222c.jpg'
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
        duration: '14h 30m',
        enrolledLearners: '~18,300+',
        description: 'Learn Java programming from basics to advanced OOP concepts. Master syntax, data types, control structures, and object-oriented principles.',
        careerGrowth: 'Java developer positions and enterprise software development'
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
        duration: '24h 45m',
        enrolledLearners: '~12,100+',
        description: 'Master Spring Framework for enterprise Java development including Spring Boot, MVC, Security, and microservices architecture.',
        careerGrowth: 'Senior Java developer and enterprise architect positions'
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
        duration: '8h 20m',
        enrolledLearners: '~9,600+',
        description: 'Master Java Collections Framework, functional programming with lambdas, and Stream API for efficient data processing.',
        careerGrowth: 'Intermediate to senior Java developer positions'
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
        duration: '20h 10m',
        enrolledLearners: '~7,200+',
        description: 'Learn to design and build scalable microservices using Java, Spring Cloud, Docker, and modern deployment strategies.',
        careerGrowth: 'Microservices architect and cloud-native developer roles'
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
        duration: '12h 15m',
        enrolledLearners: '~25,400+',
        description: 'Start your Python journey with this comprehensive beginner course covering syntax, data structures, functions, and practical projects.',
        careerGrowth: 'Python developer positions and data analysis roles'
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
        duration: '18h 40m',
        enrolledLearners: '~14,700+',
        description: 'Master Django framework for web development including models, views, templates, REST APIs, and database integration.',
        careerGrowth: 'Full-stack Python developer and web application architect'
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
        duration: '26h 30m',
        enrolledLearners: '~16,800+',
        description: 'Comprehensive data science course using Python, pandas, NumPy, matplotlib, and machine learning libraries.',
        careerGrowth: 'Data scientist and machine learning engineer positions'
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
        duration: '32h 20m',
        enrolledLearners: '~11,300+',
        description: 'Master machine learning algorithms and deep learning using Python, scikit-learn, TensorFlow, and Keras.',
        careerGrowth: 'Machine learning engineer and AI specialist roles'
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
      duration: '28h 45m',
      enrolledLearners: '~15,700+',
      description: 'Master full-stack web development with MongoDB, Express.js, React, and Node.js. Build complete web applications from scratch.',
      careerGrowth: 'Full-stack developer and MERN stack specialist positions'
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
      duration: '6h 30m',
      enrolledLearners: '~22,100+',
      description: 'Master CSS styling fundamentals including selectors, properties, layouts, animations, and responsive design principles.',
      careerGrowth: 'Front-end developer and UI/UX designer roles'
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
      duration: '4h 15m',
      enrolledLearners: '~18,300+',
      description: 'Master CSS Flexbox for creating flexible and responsive layouts with practical examples and real-world projects.',
      careerGrowth: 'Advanced front-end development and responsive web design'
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
      duration: '8h 20m',
      enrolledLearners: '~19,500+',
      description: 'Learn modern JavaScript ES6+ features including arrow functions, destructuring, modules, promises, and async/await.',
      careerGrowth: 'Modern JavaScript developer and front-end specialist'
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
          {course.img && (
            <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
          )}
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

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                India's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Trusted &</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Affordable</span>
                <br />
                <span className="text-gray-800">Learning Platform</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Unlock your potential by joining our comprehensive learning solution.
                The most effective way to master new skills and advance your career.
              </p>
            </div>
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Get Started
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
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105 ${selectedLanguage === language
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
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our comprehensive courses.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
