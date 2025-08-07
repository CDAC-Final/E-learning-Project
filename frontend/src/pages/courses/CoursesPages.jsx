import React, { useState, useEffect } from 'react';

import {
    Search,
    Filter,
    Clock,
    Users,
    Star,
    Play,
    BookOpen,
    Award,
    ChevronDown,
    Heart,
    ShoppingCart,
    Check,
    Code,
    Database,
    Globe,
    Smartphone,
    Brain,
    Palette,
    TrendingUp,
    Zap,
    ArrowRight
} from 'lucide-react';



const CoursesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedLevel, setSelectedLevel] = useState('all');
    const [selectedPrice, setSelectedPrice] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('popular');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
    
    useEffect(() => {
        if (selectedCourse || showEnrollmentForm) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedCourse, showEnrollmentForm]);

    const categories = [
        { id: 'all', name: 'All Courses', icon: BookOpen, count: 47 },
        { id: 'programming', name: 'Programming', icon: Code, count: 15 },
        { id: 'web-dev', name: 'Web Development', icon: Globe, count: 12 },
        { id: 'data-science', name: 'Data Science', icon: Database, count: 8 },
        { id: 'mobile', name: 'Mobile Development', icon: Smartphone, count: 6 },
        { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 4 },
        { id: 'design', name: 'Design', icon: Palette, count: 2 }
    ];

    const courses = [
        {
            id: 1,
            title: 'Complete C Programming Masterclass',
            category: 'programming',
            level: 'beginner',
            price: 1299,
            originalPrice: 2999,
            rating: 4.8,
            students: 12450,
            duration: '40 hours',
            lessons: 120,
            instructor: 'Rajesh Sharma',
            thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
            bestseller: true,
            description: 'Master C programming from basics to advanced concepts with hands-on projects.',
            fullDescription: 'This comprehensive C programming course takes you from absolute beginner to advanced level. You\'ll learn fundamental programming concepts, data structures, algorithms, and advanced topics like pointers and memory management. The course includes 15+ hands-on projects, coding exercises, and real-world applications that will prepare you for technical interviews and professional development.',
            skills: ['C Fundamentals', 'Pointers', 'Data Structures', 'File Handling'],
            curriculum: [
                { module: 'Introduction to C Programming', lessons: 15, duration: '5 hours' },
                { module: 'Variables and Data Types', lessons: 12, duration: '4 hours' },
                { module: 'Control Structures', lessons: 18, duration: '6 hours' },
                { module: 'Functions and Modular Programming', lessons: 20, duration: '7 hours' },
                { module: 'Arrays and Strings', lessons: 25, duration: '8 hours' },
                { module: 'Pointers and Memory Management', lessons: 30, duration: '10 hours' }
            ],
            prerequisites: ['Basic computer knowledge', 'No prior programming experience required'],
            whatYouLearn: [
                'Master C programming fundamentals',
                'Understand pointers and memory management',
                'Build real-world applications',
                'Prepare for technical interviews',
                'Learn debugging and optimization techniques'
            ]
        },
        {
            id: 2,
            title: 'Full Stack Web Development Bootcamp',
            category: 'web-dev',
            level: 'intermediate',
            price: 2499,
            originalPrice: 4999,
            rating: 4.9,
            students: 8920,
            duration: '80 hours',
            lessons: 200,
            instructor: 'Priya Patel',
            thumbnail: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=250&fit=crop',
            hot: true,
            description: 'Build modern web applications with React, Node.js, and MongoDB.',
            fullDescription: 'Become a full-stack web developer with this comprehensive bootcamp. Learn to build modern, responsive web applications using the MERN stack (MongoDB, Express.js, React, Node.js). The course covers frontend development, backend APIs, database design, authentication, deployment, and best practices used in the industry.',
            skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
            curriculum: [
                { module: 'HTML, CSS & JavaScript Fundamentals', lessons: 25, duration: '10 hours' },
                { module: 'React.js Development', lessons: 35, duration: '15 hours' },
                { module: 'Node.js & Express.js', lessons: 30, duration: '12 hours' },
                { module: 'MongoDB & Database Design', lessons: 20, duration: '8 hours' },
                { module: 'Authentication & Security', lessons: 15, duration: '6 hours' },
                { module: 'Deployment & DevOps', lessons: 25, duration: '10 hours' },
                { module: 'Capstone Projects', lessons: 50, duration: '19 hours' }
            ],
            prerequisites: ['Basic HTML/CSS knowledge', 'JavaScript fundamentals'],
            whatYouLearn: [
                'Build full-stack web applications',
                'Master React.js and modern JavaScript',
                'Create RESTful APIs with Node.js',
                'Work with databases and authentication',
                'Deploy applications to production'
            ]
        },
        {
            id: 3,
            title: 'Python for Data Science & AI',
            category: 'data-science',
            level: 'intermediate',
            price: 1999,
            originalPrice: 3999,
            rating: 4.7,
            students: 15670,
            duration: '60 hours',
            lessons: 150,
            instructor: 'Dr. Ankit Kumar',
            thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
            bestseller: true,
            description: 'Master Python programming for data analysis, visualization, and machine learning.',
            skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn']
        },
        {
            id: 4,
            title: 'React Native Mobile App Development',
            category: 'mobile',
            level: 'advanced',
            price: 2999,
            originalPrice: 5999,
            rating: 4.6,
            students: 5430,
            duration: '70 hours',
            lessons: 180,
            instructor: 'Vikram Singh',
            thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
            description: 'Build cross-platform mobile apps with React Native and publish to app stores.',
            skills: ['React Native', 'Redux', 'Navigation', 'Publishing']
        },
        {
            id: 5,
            title: 'JavaScript ES6+ Modern Development',
            category: 'programming',
            level: 'intermediate',
            price: 1599,
            originalPrice: 2999,
            rating: 4.8,
            students: 9870,
            duration: '45 hours',
            lessons: 130,
            instructor: 'Sneha Gupta',
            thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop',
            hot: true,
            description: 'Master modern JavaScript with ES6+ features, async programming, and more.',
            skills: ['ES6+', 'Async/Await', 'Modules', 'DOM Manipulation']
        },
        {
            id: 6,
            title: 'Machine Learning with Python',
            category: 'ai-ml',
            level: 'advanced',
            price: 3499,
            originalPrice: 6999,
            rating: 4.9,
            students: 3210,
            duration: '90 hours',
            lessons: 220,
            instructor: 'Prof. Rahul Mehta',
            thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
            bestseller: true,
            description: 'Deep dive into machine learning algorithms and build real-world AI applications.',
            skills: ['ML Algorithms', 'TensorFlow', 'Deep Learning', 'NLP']
        },
        {
            id: 7,
            title: 'UI/UX Design Fundamentals',
            category: 'design',
            level: 'beginner',
            price: 1799,
            originalPrice: 3499,
            rating: 4.7,
            students: 4560,
            duration: '35 hours',
            lessons: 100,
            instructor: 'Kavya Reddy',
            thumbnail: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=250&fit=crop',
            description: 'Learn user interface and user experience design principles with practical projects.',
            skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems']
        },
        {
            id: 8,
            title: 'Advanced Data Structures & Algorithms',
            category: 'programming',
            level: 'advanced',
            price: 2199,
            originalPrice: 4299,
            rating: 4.8,
            students: 6780,
            duration: '55 hours',
            lessons: 160,
            instructor: 'Arjun Krishnan',
            thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
            description: 'Master complex data structures and algorithms for technical interviews and beyond.',
            skills: ['Trees', 'Graphs', 'Dynamic Programming', 'System Design']
        }
    ];

    const filteredCourses = courses.filter(course => {
        const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
        const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
        const matchesPrice = selectedPrice === 'all' ||
            (selectedPrice === 'free' && course.price === 0) ||
            (selectedPrice === 'paid' && course.price > 0) ||
            (selectedPrice === 'under2000' && course.price < 2000) ||
            (selectedPrice === 'above2000' && course.price >= 2000);
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesLevel && matchesPrice && matchesSearch;
    });

    const sortedCourses = [...filteredCourses].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'newest':
                return b.id - a.id;
            default:
                return b.students - a.students;
        }
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 ">
            {/* Background Pattern */}



            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-200/40 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>

            <div className="relative z-10">
                {/* Hero Section */}
                <div className="container mx-auto px-4 sm:px-6 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                            Explore Our Courses
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Discover world-class courses designed by industry experts. Learn at your own pace and advance your career with practical, hands-on projects.
                        </p>
                    </div>

                    {/* Search and Filters */}
                    <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-gray-200/50 shadow-lg">
                        <div className="flex flex-col lg:flex-row gap-4 items-center">
                            {/* Search */}
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search courses..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                                />
                            </div>

                            {/* Filters */}
                            <div className="flex flex-wrap gap-3">
                                <select
                                    value={selectedLevel}
                                    onChange={(e) => setSelectedLevel(e.target.value)}
                                    className="px-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                >
                                    <option value="all">All Levels</option>
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advanced">Advanced</option>
                                </select>

                                <select
                                    value={selectedPrice}
                                    onChange={(e) => setSelectedPrice(e.target.value)}
                                    className="px-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                >
                                    <option value="all">All Prices</option>
                                    <option value="free">Free</option>
                                    <option value="under2000">Under ₹2000</option>
                                    <option value="above2000">Above ₹2000</option>
                                </select>

                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                >
                                    <option value="popular">Most Popular</option>
                                    <option value="rating">Highest Rated</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="newest">Newest</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="mb-8">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${selectedCategory === category.id
                                        ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-300/25'
                                        : 'bg-white/70 text-gray-700 hover:bg-white/80 border border-gray-300'
                                        }`}
                                >
                                    <category.icon className="w-5 h-5" />
                                    <span className="font-medium">{category.name}</span>
                                    <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                                        {category.count}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="text-center mb-8">
                        <p className="text-gray-700">
                            Showing <span className="text-purple-600 font-semibold">{sortedCourses.length}</span> courses
                        </p>
                    </div>

                    {/* Course Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {sortedCourses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-white/70 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-200/50 hover:border-purple-300/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-200/30 group shadow-lg"
                            >
                                {/* Course Thumbnail */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                                            <Play className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Badges */}
                                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                                        {course.bestseller && (
                                            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                Bestseller
                                            </span>
                                        )}
                                        {course.hot && (
                                            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                🔥 Hot
                                            </span>
                                        )}
                                    </div>

                                    {/* Wishlist */}
                                    <button className="absolute top-4 right-4 bg-white/50 backdrop-blur-sm rounded-full p-2 hover:bg-white/70 transition-colors">
                                        <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
                                    </button>
                                </div>

                                {/* Course Content */}
                                <div className="p-6">
                                    {/* Course Level */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${course.level === 'beginner' ? 'bg-green-100 text-green-700' :
                                            course.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-red-100 text-red-700'
                                            }`}>
                                            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                                        </span>
                                        <div className="flex items-center space-x-1">
                                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                            <span className="text-sm text-gray-600">{course.rating}</span>
                                        </div>
                                    </div>

                                    {/* Course Title */}
                                    <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                                        {course.title}
                                    </h3>

                                    {/* Course Description */}
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {course.description}
                                    </p>

                                    {/* Course Stats */}
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <div className="flex items-center space-x-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Users className="w-4 h-4" />
                                            <span>{course.students.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <BookOpen className="w-4 h-4" />
                                            <span>{course.lessons} lessons</span>
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {course.skills.slice(0, 3).map((skill, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {course.skills.length > 3 && (
                                            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                                                +{course.skills.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Instructor */}
                                    <p className="text-sm text-gray-500 mb-4">
                                        by <span className="text-purple-600">{course.instructor}</span>
                                    </p>

                                    {/* Price and CTA */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-2xl font-bold text-gray-800">
                                                ₹{course.price.toLocaleString()}
                                            </span>
                                            {course.originalPrice > course.price && (
                                                <span className="text-sm text-gray-500 line-through">
                                                    ₹{course.originalPrice.toLocaleString()}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* View Course Button */}
                                    <button
                                        onClick={() => setSelectedCourse(course)}
                                        className="w-full mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-300/25 flex items-center justify-center space-x-2"
                                    >
                                        <BookOpen className="w-5 h-5" />
                                        <span>View Course</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Results */}
                    {sortedCourses.length === 0 && (
                        <div className="text-center py-12">
                            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-gray-200/50 max-w-md mx-auto shadow-lg">
                                <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">No courses found</h3>
                                <p className="text-gray-600 mb-4">
                                    Try adjusting your filters or search terms to find the perfect course for you.
                                </p>
                                <button
                                    onClick={() => {
                                        setSelectedCategory('all');
                                        setSelectedLevel('all');
                                        setSelectedPrice('all');
                                        setSearchQuery('');
                                    }}
                                    className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Load More Button */}
                    {sortedCourses.length > 0 && (
                        <div className="text-center mt-12">
                            <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-300/25">
                                Load More Courses
                            </button>
                        </div>
                    )}
                </div>

                {/* Course Detail Modal */}
                {selectedCourse && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200/50 shadow-2xl">
                            {/* Modal Header */}
                            <div className="relative">
                                <img
                                    src={selectedCourse.thumbnail}
                                    alt={selectedCourse.title}
                                    className="w-full h-64 object-cover rounded-t-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-2xl"></div>
                                <button
                                    onClick={() => setSelectedCourse(null)}
                                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                                >
                                    <span className="text-white text-xl">×</span>
                                </button>

                                {/* Course badges */}
                                <div className="absolute bottom-4 left-4 flex gap-2">
                                    {selectedCourse.bestseller && (
                                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            Bestseller
                                        </span>
                                    )}
                                    {selectedCourse.hot && (
                                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            🔥 Hot
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="p-8">
                                {/* Course Header */}
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${selectedCourse.level === 'beginner' ? 'bg-green-100 text-green-700' :
                                            selectedCourse.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-red-100 text-red-700'
                                            }`}>
                                            {selectedCourse.level.charAt(0).toUpperCase() + selectedCourse.level.slice(1)}
                                        </span>
                                        <div className="flex items-center space-x-4 text-gray-600">
                                            <div className="flex items-center space-x-1">
                                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                                <span>{selectedCourse.rating}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Users className="w-5 h-5" />
                                                <span>{selectedCourse.students.toLocaleString()} students</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                        {selectedCourse.title}
                                    </h1>

                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        {selectedCourse.fullDescription}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500">
                                            Instructor: <span className="text-purple-600 font-semibold">{selectedCourse.instructor}</span>
                                        </p>
                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                            <div className="flex items-center space-x-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{selectedCourse.duration}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <BookOpen className="w-4 h-4" />
                                                <span>{selectedCourse.lessons} lessons</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* Course Content */}
                                    <div className="md:col-span-2 space-y-8">
                                        {/* What You'll Learn */}
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                                <Award className="w-6 h-6 mr-2 text-purple-600" />
                                                What You'll Learn
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-3">
                                                {selectedCourse.whatYouLearn?.map((item, index) => (
                                                    <div key={index} className="flex items-start space-x-2">
                                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-600">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Course Curriculum */}
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                                <BookOpen className="w-6 h-6 mr-2 text-purple-600" />
                                                Course Curriculum
                                            </h3>
                                            <div className="space-y-3">
                                                {selectedCourse.curriculum?.map((module, index) => (
                                                    <div key={index} className="bg-white/50 backdrop-blur-lg rounded-lg p-4 border border-gray-200/50">
                                                        <div className="flex items-center justify-between">
                                                            <h4 className="font-semibold text-gray-800">{module.module}</h4>
                                                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                                <span>{module.lessons} lessons</span>
                                                                <span>{module.duration}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Prerequisites */}
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-4">Prerequisites</h3>
                                            <ul className="space-y-2">
                                                {selectedCourse.prerequisites?.map((prereq, index) => (
                                                    <li key={index} className="flex items-center space-x-2 text-gray-600">
                                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                        <span>{prereq}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Enrollment Card */}
                                    <div className="md:col-span-1">
                                        <div className="bg-white rounded-xl p-6 border border-gray-200/50 shadow-lg z-40 mb-16">
                                            {/* Price */}
                                            <div className="text-center mb-6">
                                                <div className="flex items-center justify-center space-x-2 mb-2">
                                                    <span className="text-3xl font-bold text-gray-800">
                                                        ₹{selectedCourse.price.toLocaleString()}
                                                    </span>
                                                    {selectedCourse.originalPrice > selectedCourse.price && (
                                                        <span className="text-lg text-gray-500 line-through">
                                                            ₹{selectedCourse.originalPrice.toLocaleString()}
                                                        </span>
                                                    )}
                                                </div>
                                                {selectedCourse.originalPrice > selectedCourse.price && (
                                                    <div className="text-sm text-green-600 font-semibold">
                                                        Save ₹{(selectedCourse.originalPrice - selectedCourse.price).toLocaleString()}
                                                        ({Math.round(((selectedCourse.originalPrice - selectedCourse.price) / selectedCourse.originalPrice) * 100)}% off)
                                                    </div>
                                                )}
                                            </div>

                                            {/* Skills */}
                                            <div className="mb-6">
                                                <h4 className="font-semibold text-gray-800 mb-3">Skills You'll Gain</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedCourse.skills.map((skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full border border-purple-200"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Enroll Button */}
                                            <button
                                                onClick={() => setShowEnrollmentForm(true)}
                                                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-300/25 flex items-center justify-center space-x-2 mb-4"
                                            >
                                                <ShoppingCart className="w-5 h-5" />
                                                <span>Enroll Now</span>
                                            </button>

                                            {/* Course Features */}
                                            <div className="space-y-3 text-sm text-gray-600">
                                                <div className="flex items-center space-x-2">
                                                    <Clock className="w-4 h-4 text-purple-500" />
                                                    <span>Lifetime access</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Award className="w-4 h-4 text-purple-500" />
                                                    <span>Certificate of completion</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Users className="w-4 h-4 text-purple-500" />
                                                    <span>Community access</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Heart className="w-4 h-4 text-purple-500" />
                                                    <span>30-day money-back guarantee</span>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Enrollment Form Modal */}
                {showEnrollmentForm && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl max-w-md w-full border border-gray-200/50 shadow-2xl">
                            <div className="p-8">
                                <div className="text-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Complete Your Enrollment</h2>
                                    <p className="text-gray-600">Join thousands of students learning {selectedCourse?.title}</p>
                                </div>

                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Experience Level
                                        </label>
                                        <select className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent">
                                            <option value="">Select your level</option>
                                            <option value="beginner">Complete Beginner</option>
                                            <option value="some">Some Experience</option>
                                            <option value="intermediate">Intermediate</option>
                                            <option value="advanced">Advanced</option>
                                        </select>
                                    </div>

                                    {/* Course Summary */}
                                    <div className="bg-white/50 rounded-lg p-4 border border-gray-200/50">
                                        <h3 className="font-semibold text-gray-800 mb-2">Order Summary</h3>
                                        <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                                            <span>{selectedCourse?.title}</span>
                                            <span>₹{selectedCourse?.price.toLocaleString()}</span>
                                        </div>
                                        {selectedCourse?.originalPrice > selectedCourse?.price && (
                                            <div className="flex justify-between items-center text-sm text-green-600 mb-2">
                                                <span>Discount</span>
                                                <span>-₹{(selectedCourse.originalPrice - selectedCourse.price).toLocaleString()}</span>
                                            </div>
                                        )}
                                        <div className="border-t border-gray-300 pt-2 flex justify-between items-center font-semibold text-gray-800">
                                            <span>Total</span>
                                            <span>₹{selectedCourse?.price.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <div className="flex space-x-3">
                                        <button
                                            type="button"
                                            onClick={() => setShowEnrollmentForm(false)}
                                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                                        >
                                            Complete Enrollment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                
        </div>
            </div>
    );
};

export default CoursesPage;