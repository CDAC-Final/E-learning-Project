import React from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    BookOpen,
    Users,
    Award,
    Heart,
    ArrowRight
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const courseCategories = [
        { name: 'C Programming', href: '#', popular: true },
        { name: 'Python Development', href: '#' },
        { name: 'Full Stack Web Dev', href: '#', popular: true },
        { name: 'Data Structures', href: '#' },
        { name: 'JavaScript ES6', href: '#' },
        { name: 'React Development', href: '#' }
    ];

    const companyLinks = [
        { name: 'About Us', href: '#' },
        { name: 'Our Story', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact Us', href: '#' }
    ];

    const supportLinks = [
        { name: 'Help Center', href: '#' },
        { name: 'Student Support', href: '#' },
        { name: 'Course Refunds', href: '#' },
        { name: 'Technical Support', href: '#' },
        { name: 'Community Forum', href: '#' },
        { name: 'Live Chat', href: '#' }
    ];

    const legalLinks = [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'GDPR Compliance', href: '#' }
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
        { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
        { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
        { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
        { icon: Youtube, href: '#', color: 'hover:text-red-500' }
    ];

    const stats = [
        { icon: Users, value: '50K+', label: 'Active Students' },
        { icon: BookOpen, value: '200+', label: 'Courses Available' },
        { icon: Award, value: '95%', label: 'Success Rate' }
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 mt-50 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600/20 to-transparent rounded-full translate-x-48 translate-y-48"></div>

            <div className="relative z-10">
                {/* Stats Section */}
                <div className="border-b border-gray-700/50">
                    <div className="container mx-auto px-4 sm:px-6 py-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                                            <stat.icon className="w-8 h-8" />
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-300">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="container mx-auto px-4 sm:px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                                    EduPlatform
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    India's most trusted and affordable learning platform. Empowering millions of students to achieve their career goals through quality education.
                                </p>

                                {/* Contact Info */}
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                                        <Mail className="w-5 h-5" />
                                        <span>support@eduplatform.com</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                                        <Phone className="w-5 h-5" />
                                        <span>+91 98765 43210</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                                        <MapPin className="w-5 h-5" />
                                        <span>Mumbai, Maharashtra, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Popular Courses */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-white">Popular Courses</h4>
                            <ul className="space-y-3">
                                {courseCategories.map((course, index) => (
                                    <li key={index}>
                                        <a
                                            href={course.href}
                                            className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                                        >
                                            <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                                            {course.name}
                                            {course.popular && (
                                                <span className="ml-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full">
                                                    Hot
                                                </span>
                                            )}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
                            <ul className="space-y-3">
                                {companyLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                                        >
                                            <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                       
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-700/50 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                            {/* Copyright */}
                            <div className="text-center md:text-left">
                                <p className="text-gray-300 text-sm">
                                    © {currentYear} EduPlatform. Made with <Heart className="w-4 h-4 inline text-red-500" /> in India. All rights reserved.
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-2">
                                    {legalLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.href}
                                            className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`bg-gray-800/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${social.color}`}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </footer>
    );
};

export default Footer;