import React, { useState } from 'react';
import { User, Mail, BookOpen, Calendar, Clock, Award, Settings, Edit3, Save, X } from 'lucide-react';

const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [studentData, setStudentData] = useState({
    name: "Rahul Deshmukh",
    email: "rahul.deshmukh@email.com",
    joinDate: "January 2024",
    totalCourses: 4,
    completedCourses: 2
  });

  const [editData, setEditData] = useState({ ...studentData });

  // Sample enrolled courses data
  const enrolledCourses = [
    {
      id: 1,
      title: "React Development Masterclass",
      progress: 85,
      status: "In Progress",
      instructor: "Prof. Anita Mam",
      duration: "12 weeks",
      completedLessons: 17,
      totalLessons: 20,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400"
    },
    {
      id: 2,
      title: "Advanced Java Full Course",
      progress: 100,
      status: "Completed",
      instructor: "Dr. Vikram Sir",
      duration: "8 weeks",
      completedLessons: 15,
      totalLessons: 15,
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20230823152056/What-is-Advance-JAVA.png"
    },
    {
      id: 3,
      title: "Digital Marketing Fundamentals",
      progress: 60,
      status: "In Progress",
      instructor: "Ms. Priya Mam",
      duration: "10 weeks",
      completedLessons: 6,
      totalLessons: 10,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400"
    },
    {
      id: 4,
      title: "Machine Learning Basics",
      progress: 25,
      status: "In Progress",
      instructor: "Dr. Raj Sir",
      duration: "16 weeks",
      completedLessons: 4,
      totalLessons: 16,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400"
    }
  ];

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({ ...studentData });
  };

  const handleSave = () => {
    setStudentData({ ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ ...studentData });
    setIsEditing(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Student Profile</h1>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Profile Information Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center mb-4">
                  <User className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                </div>
                
                {isEditing ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      className="text-xl font-bold text-center w-full border-2 border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                    />
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                      className="text-gray-600 text-center w-full border-2 border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                    />
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={handleSave}
                        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors"
                      >
                        <Save className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{studentData.name}</h2>
                    <div className="flex items-center justify-center text-gray-600 mb-4">
                      <Mail className="w-4 h-4 mr-2" />
                      {studentData.email}
                    </div>
                    <button
                      onClick={handleEdit}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center mx-auto"
                    >
                      <Edit3 className="w-4 h-4 mr-2" />
                      Edit Profile
                    </button>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Member Since</span>
                  </div>
                  <span className="font-semibold text-gray-800">{studentData.joinDate}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Total Courses</span>
                  </div>
                  <span className="font-semibold text-gray-800">{studentData.totalCourses}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Completed</span>
                  </div>
                  <span className="font-semibold text-gray-800">{studentData.completedCourses}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enrolled Courses */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Enrolled Courses</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {enrolledCourses.length} Courses
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 mb-1 line-clamp-2">{course.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
                        
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                            {course.status}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-2">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {course.completedLessons}/{course.totalLessons} lessons completed
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium">
                          {course.status === 'Completed' ? 'View Certificate' : 'Continue Learning'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;