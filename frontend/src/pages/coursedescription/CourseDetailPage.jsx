
import React, { useState, useEffect } from 'react';
import { Star, Clock, Users, Play, Lock, Heart, Share2, Award, BookOpen, User, Briefcase, FileText, CheckCircle, HelpCircle, Globe, ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const CourseDetailPage = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  
  const [selectedSection, setSelectedSection] = useState('introduction');
  const [isLiked, setIsLiked] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleGoBack = () => {
    navigate('/');
  };

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Sample course data with YouTube video URLs
  const coursesData = {
    'c-programming': {
      title: "C Programming",
      rating: 4.8,
      duration: "8h 45m",
      enrolledLearners: "~12,500+",
      description: "Master the fundamentals of C programming language with this comprehensive course. Learn syntax, data structures, algorithms, and best practices through hands-on projects and real-world examples. This course covers everything from basic variable declarations to advanced pointer manipulation and memory management.",
      careerGrowth: "Foundation for system programming, embedded systems, and technical interviews. Opens doors to software development roles in companies like Microsoft, Google, and embedded systems companies.",
      level: "Beginner",
      gradient: "from-blue-500 to-purple-600",
      sections: [
        {
          id: 'introduction',
          title: 'Introduction to C Programming',
          lessons: 8,
          lessons_data: [
            { 
              id: 1, 
              title: 'Welcome to C Programming', 
              type: 'video', 
              preview: true, 
              duration: '5:23',
              videoUrl: 'https://www.youtube.com/watch?v=KJgsSFOSQv0' // C Programming tutorial
            },
            { 
              id: 2, 
              title: 'Setting up Development Environment', 
              type: 'video', 
              locked: true, 
              duration: '8:45',
              videoUrl: 'https://www.youtube.com/watch?v=1h2LuBfj3wI'
            },
            { 
              id: 3, 
              title: 'Your First C Program', 
              type: 'video', 
              locked: true, 
              duration: '12:30',
              videoUrl: 'https://www.youtube.com/watch?v=rLf3jnHxSmU'
            },
            { 
              id: 4, 
              title: 'Variables and Data Types', 
              type: 'video', 
              locked: true, 
              duration: '9:15',
              videoUrl: 'https://www.youtube.com/watch?v=vs2-ZuLK5Z0'
            },
            { 
              id: 5, 
              title: 'Input and Output Operations', 
              type: 'video', 
              locked: true, 
              duration: '7:20',
              videoUrl: 'https://www.youtube.com/watch?v=nXvy5900m3M'
            },
            { 
              id: 6, 
              title: 'Operators in C', 
              type: 'video', 
              locked: true, 
              duration: '11:45',
              videoUrl: 'https://www.youtube.com/watch?v=a3IZ8WvvwRI'
            },
            { 
              id: 7, 
              title: 'Control Structures', 
              type: 'video', 
              locked: true, 
              duration: '13:10',
              videoUrl: 'https://www.youtube.com/watch?v=GjXFuron_kE'
            },
            { id: 8, title: 'Practice Exercise', type: 'quiz', locked: true, duration: '10:30' }
          ]
        },
        {
          id: 'advanced',
          title: 'Advanced C Concepts',
          lessons: 6,
          lessons_data: [
            { 
              id: 9, 
              title: 'Functions and Recursion', 
              type: 'video', 
              locked: true, 
              duration: '15:20',
              videoUrl: 'https://www.youtube.com/watch?v=kepBmgvWNDw'
            },
            { 
              id: 10, 
              title: 'Arrays and Strings', 
              type: 'video', 
              locked: true, 
              duration: '18:45',
              videoUrl: 'https://www.youtube.com/watch?v=7mUHlHzKIkg'
            },
            { 
              id: 11, 
              title: 'Pointers Fundamentals', 
              type: 'video', 
              locked: true, 
              duration: '22:30',
              videoUrl: 'https://www.youtube.com/watch?v=mw1qsMieK10'
            },
            { 
              id: 12, 
              title: 'Dynamic Memory Allocation', 
              type: 'video', 
              locked: true, 
              duration: '19:15',
              videoUrl: 'https://www.youtube.com/watch?v=R0qIYWo8igs'
            },
            { 
              id: 13, 
              title: 'File Handling', 
              type: 'video', 
              locked: true, 
              duration: '16:20',
              videoUrl: 'https://www.youtube.com/watch?v=BQJBe4IbsvQ'
            },
            { id: 14, title: 'Final Project', type: 'project', locked: true, duration: '45:00' }
          ]
        }
      ],
      keyTakeaways: [
        { icon: User, text: 'Learn from Industry Leaders with 10+ years experience' },
        { icon: Briefcase, text: 'Build 5+ real-world projects for your portfolio' },
        { icon: FileText, text: 'Resume enhancement with C programming skills' },
        { icon: Award, text: 'Industry-recognized completion certificate' },
        { icon: User, text: 'Personalized mentoring and code reviews' },
        { icon: Clock, text: 'Self-paced learning - Complete in 4-6 weeks' },
        { icon: BookOpen, text: 'Hands-on coding exercises and challenges' },
        { icon: CheckCircle, text: 'Project-based learning approach' },
        { icon: HelpCircle, text: '24/7 doubt clearing and community support' },
        { icon: Globe, text: 'Access to exclusive C programming resources' }
      ]
    },
    'python-basics': {
      title: "Python for Beginners",
      rating: 4.9,
      duration: "12h 15m",
      enrolledLearners: "~25,400+",
      description: "Start your Python journey with this comprehensive beginner course covering syntax, data structures, functions, and practical projects. Learn the most popular programming language used in web development, data science, AI, and automation. Perfect for complete beginners with no prior programming experience.",
      careerGrowth: "Python developer positions, data analysis roles, web development, and automation engineering. High demand in tech companies like Netflix, Instagram, and Spotify.",
      level: "Beginner",
      gradient: "from-green-500 to-emerald-600",
      sections: [
        {
          id: 'introduction',
          title: 'Python Fundamentals',
          lessons: 10,
          lessons_data: [
            { 
              id: 1, 
              title: 'Why Choose Python?', 
              type: 'video', 
              preview: true, 
              duration: '6:15',
              videoUrl: 'https://www.youtube.com/watch?v=Y8Tko2YC5hA' // Python tutorial
            },
            { 
              id: 2, 
              title: 'Installing Python and IDE Setup', 
              type: 'video', 
              locked: true, 
              duration: '9:30',
              videoUrl: 'https://www.youtube.com/watch?v=VuKvR1J2LQE'
            },
            { 
              id: 3, 
              title: 'Python Syntax and Indentation', 
              type: 'video', 
              locked: true, 
              duration: '11:45',
              videoUrl: 'https://www.youtube.com/watch?v=kqtD5dpn9C8'
            },
            { 
              id: 4, 
              title: 'Variables and Data Types', 
              type: 'video', 
              locked: true, 
              duration: '14:20',
              videoUrl: 'https://www.youtube.com/watch?v=O2wQ3IVDUvU'
            },
            { 
              id: 5, 
              title: 'Lists, Tuples, and Dictionaries', 
              type: 'video', 
              locked: true, 
              duration: '16:30',
              videoUrl: 'https://www.youtube.com/watch?v=W8KRzm-HUcc'
            },
            { 
              id: 6, 
              title: 'Conditional Statements', 
              type: 'video', 
              locked: true, 
              duration: '12:15',
              videoUrl: 'https://www.youtube.com/watch?v=DZwmZ8Usvnk'
            },
            { 
              id: 7, 
              title: 'Loops in Python', 
              type: 'video', 
              locked: true, 
              duration: '15:45',
              videoUrl: 'https://www.youtube.com/watch?v=6iF8Xb7Z3wQ'
            },
            { 
              id: 8, 
              title: 'Functions and Modules', 
              type: 'video', 
              locked: true, 
              duration: '18:20',
              videoUrl: 'https://www.youtube.com/watch?v=9Os0o3wzS_I'
            },
            { 
              id: 9, 
              title: 'Error Handling', 
              type: 'video', 
              locked: true, 
              duration: '13:10',
              videoUrl: 'https://www.youtube.com/watch?v=NIWwJbo-9_8'
            },
            { id: 10, title: 'Practice Quiz', type: 'quiz', locked: true, duration: '20:00' }
          ]
        },
        {
          id: 'projects',
          title: 'Python Projects',
          lessons: 4,
          lessons_data: [
            { id: 11, title: 'Calculator Project', type: 'project', locked: true, duration: '25:30' },
            { id: 12, title: 'To-Do List Application', type: 'project', locked: true, duration: '32:45' },
            { 
              id: 13, 
              title: 'Web Scraping Basics', 
              type: 'video', 
              locked: true, 
              duration: '28:15',
              videoUrl: 'https://www.youtube.com/watch?v=XVv6mJpFOb0'
            },
            { id: 14, title: 'Final Capstone Project', type: 'project', locked: true, duration: '60:00' }
          ]
        }
      ],
      keyTakeaways: [
        { icon: User, text: 'Learn from Python experts and industry professionals' },
        { icon: Briefcase, text: 'Build 4+ practical Python projects' },
        { icon: FileText, text: 'Python certification for your resume' },
        { icon: Award, text: 'Completion certificate recognized by employers' },
        { icon: User, text: 'Access to Python developer community' },
        { icon: Clock, text: 'Flexible learning - 3-5 weeks duration' },
        { icon: BookOpen, text: 'Interactive coding exercises and challenges' },
        { icon: CheckCircle, text: 'Real-world problem solving approach' },
        { icon: HelpCircle, text: 'Expert support and code review sessions' },
        { icon: Globe, text: 'Lifetime access to course materials and updates' }
      ]
    }
  };

  useEffect(() => {
    setCurrentCourse(coursesData[courseId] || coursesData['c-programming']);
  }, [courseId]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentCourse?.title,
        text: currentCourse?.description.substring(0, 100) + '...',
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Course link copied to clipboard!');
    }
  };

  const switchCourse = (courseKey) => {
    setCurrentCourse(coursesData[courseKey]);
    setSelectedSection('introduction');
    setSelectedVideo(null);
  };

  const handleVideoClick = (lesson) => {
    if (lesson.preview && lesson.videoUrl) {
      setSelectedVideo(lesson);
    }
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  if (!currentCourse) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading course...</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">{selectedVideo.title}</h3>
              <button
                onClick={closeVideoModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedVideo.videoUrl)}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium">
                    Preview Available
                  </div>
                  <span className="text-sm text-gray-500">{selectedVideo.duration}</span>
                </div>
                <a
                  href={selectedVideo.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header Section with Dynamic Background */}
      <div className={`bg-gradient-to-r ${currentCourse.gradient} text-white`}>
        <div className="container mx-auto px-4 sm:px-6 py-8">
          {/* Back Button and Breadcrumb */}
          <div className="flex items-center space-x-4 mb-6">
            <button 
              onClick={handleGoBack}
              className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2 text-purple-200">
              <span>Courses</span>
              <span>›</span>
              <span className="text-white">{currentCourse.title}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-3 py-1 inline-block mb-4">
                <span className="text-black font-medium text-sm">{currentCourse.level}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentCourse.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold">{currentCourse.rating}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-1" />
                  <span>{currentCourse.duration} total length</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-1" />
                  <span>{currentCourse.enrolledLearners} Enrolled Learners</span>
                </div>
              </div>

              {/* Course Switcher */}
              <div className="flex flex-wrap gap-3 mb-6">
                <button
                  onClick={() => switchCourse('c-programming')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    currentCourse.title === 'C Programming'
                      ? 'bg-white text-purple-600'
                      : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                  }`}
                >
                  C Programming
                </button>
                <button
                  onClick={() => switchCourse('python-basics')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    currentCourse.title === 'Python for Beginners'
                      ? 'bg-white text-green-600'
                      : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                  }`}
                >
                  Python Basics
                </button>
              </div>
            </div>

            {/* Right Content - Video Preview */}
            <div className="relative">
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <div className={`relative w-full h-full bg-gradient-to-br ${currentCourse.gradient} flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-8 h-8 text-gray-800 ml-1" />
                    </div>
                    <div className="bg-yellow-500 text-black px-3 py-1 rounded text-sm font-semibold inline-block">
                      {currentCourse.title.split(' ')[0]}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About the Course */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">About the Course</h2>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleLike}
                    className={`p-2 rounded-full transition-colors ${
                      isLiked ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className={`bg-gradient-to-r ${currentCourse.gradient} hover:opacity-90 text-white px-6 py-2 rounded-xl font-semibold transition-opacity`}>
                    Enroll Now
                  </button>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {currentCourse.description}
              </p>
            </div>

            {/* Career Growth Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Career Growth Prospects</h2>
              <p className="text-gray-600">{currentCourse.careerGrowth}</p>
            </div>

            {/* Course Content */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Course content</h2>
                  <p className="text-gray-500">{currentCourse.sections.length} Sections</p>
                </div>
                <button className={`bg-gradient-to-r ${currentCourse.gradient} hover:opacity-90 text-white px-6 py-2 rounded-xl font-semibold transition-opacity`}>
                  Start Learning
                </button>
              </div>

              {/* Course Sections */}
              <div className="space-y-4">
                {currentCourse.sections.map((section) => (
                  <div key={section.id} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setSelectedSection(selectedSection === section.id ? '' : section.id)}
                      className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`transform transition-transform ${selectedSection === section.id ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-left">{section.title}</h3>
                      </div>
                      <span className="text-gray-500 text-sm">{section.lessons} Lessons</span>
                    </button>

                    {selectedSection === section.id && (
                      <div className="divide-y divide-gray-100">
                        {section.lessons_data.map((lesson) => (
                          <div 
                            key={lesson.id} 
                            className={`flex items-center justify-between p-4 hover:bg-gray-50 ${
                              lesson.preview && lesson.videoUrl ? 'cursor-pointer' : ''
                            }`}
                            onClick={() => handleVideoClick(lesson)}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-full ${
                                lesson.type === 'video' ? 'bg-blue-100' :
                                lesson.type === 'quiz' ? 'bg-yellow-100' :
                                'bg-green-100'
                              }`}>
                                {lesson.type === 'video' ? <Play className="w-4 h-4 text-blue-600" /> :
                                 lesson.type === 'quiz' ? <HelpCircle className="w-4 h-4 text-yellow-600" /> :
                                 <Briefcase className="w-4 h-4 text-green-600" />}
                              </div>
                              <div>
                                <p className="font-medium">{lesson.title}</p>
                                <div className="flex items-center space-x-2">
                                  <p className="text-sm text-gray-500 capitalize">{lesson.type} • {lesson.duration}</p>
                                  {lesson.videoUrl && (
                                    <div className="flex items-center text-xs text-blue-600">
                                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                      </svg>
                                      YouTube
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {lesson.preview && (
                                <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium">
                                  Preview
                                </span>
                              )}
                              {lesson.locked && <Lock className="w-4 h-4 text-gray-400" />}
                              {lesson.preview && lesson.videoUrl && (
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                  <Play className="w-3 h-3 text-white ml-0.5" />
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Key Takeaways */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-6">
              <h3 className="text-xl font-bold mb-6">Key Takeaways</h3>
              <div className="space-y-4">
                {currentCourse.keyTakeaways.map((takeaway, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <takeaway.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      currentCourse.title === 'C Programming' ? 'text-blue-600' : 'text-green-600'
                    }`} />
                    <p className="text-gray-700 text-sm leading-relaxed">{takeaway.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className={`w-full bg-gradient-to-r ${currentCourse.gradient} hover:opacity-90 text-white py-3 px-4 rounded-xl font-semibold transition-opacity`}>
                  Enroll in Course
                </button>
                <p className="text-center text-gray-500 text-sm mt-3">
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;