import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Check, 
  Star, 
  Clock, 
  Users, 
  Award, 
  Shield, 
  CreditCard, 
  Smartphone, 
  Building,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Play,
  Lock,
  ChevronRight,
  Gift,
  Percent
} from 'lucide-react';

const EnrollmentPage = () => {
  const [selectedCourse, setSelectedCourse] = useState('c-programming');
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    experience: 'beginner'
  });
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const coursesData = {
    'c-programming': {
      title: "C Programming Mastery",
      originalPrice: 4999,
      discountedPrice: 2999,
      rating: 4.8,
      duration: "8h 45m",
      students: "12,500+",
      level: "Beginner",
      gradient: "from-blue-500 to-purple-600",
      features: [
        "Complete C Programming Fundamentals",
        "8+ Hands-on Projects",
        "Advanced Pointer Management",
        "Memory Allocation Techniques",
        "Industry-Standard Coding Practices",
        "Lifetime Access to Course Materials",
        "Certificate of Completion",
        "24/7 Expert Support"
      ]
    },
    'python-basics': {
      title: "Python for Beginners",
      originalPrice: 5999,
      discountedPrice: 3499,
      rating: 4.9,
      duration: "12h 15m",
      students: "25,400+",
      level: "Beginner",
      gradient: "from-green-500 to-emerald-600",
      features: [
        "Complete Python Fundamentals",
        "10+ Real-world Projects",
        "Data Structures & Algorithms",
        "Web Scraping Techniques",
        "Automation Scripts",
        "Lifetime Access to Course Materials",
        "Industry-recognized Certificate",
        "Expert Mentorship Program"
      ]
    }
  };

  const plans = {
    basic: {
      name: "Basic Access",
      price: coursesData[selectedCourse].discountedPrice - 500,
      originalPrice: coursesData[selectedCourse].originalPrice - 500,
      features: [
        "Course videos & materials",
        "Basic exercises",
        "Certificate of completion",
        "6 months access"
      ],
      popular: false
    },
    premium: {
      name: "Premium Learning",
      price: coursesData[selectedCourse].discountedPrice,
      originalPrice: coursesData[selectedCourse].originalPrice,
      features: [
        "Everything in Basic",
        "1-on-1 mentor sessions",
        "Priority support",
        "Lifetime access",
        "Project reviews",
        "Job placement assistance"
      ],
      popular: true
    },
    pro: {
      name: "Pro Developer",
      price: coursesData[selectedCourse].discountedPrice + 1000,
      originalPrice: coursesData[selectedCourse].originalPrice + 1000,
      features: [
        "Everything in Premium",
        "Advanced project portfolio",
        "Resume review & optimization",
        "Mock interview sessions",
        "Industry networking events",
        "Guaranteed job placement"
      ],
      popular: false
    }
  };

  const promoCodes = {
    'STUDENT20': { discount: 20, type: 'percentage' },
    'EARLY500': { discount: 500, type: 'fixed' },
    'WELCOME15': { discount: 15, type: 'percentage' }
  };

  const calculateDiscount = (price) => {
    if (!appliedPromo) return 0;
    if (appliedPromo.type === 'percentage') {
      return Math.floor(price * appliedPromo.discount / 100);
    }
    return appliedPromo.discount;
  };

  const getFinalPrice = () => {
    const basePrice = plans[selectedPlan].price;
    const discount = calculateDiscount(basePrice);
    return basePrice - discount;
  };

  const applyPromoCode = () => {
    if (promoCodes[promoCode.toUpperCase()]) {
      setAppliedPromo(promoCodes[promoCode.toUpperCase()]);
    } else {
      alert('Invalid promo code');
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoCode('');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleEnrollment = () => {
    // Simulate enrollment process
    alert(`Enrollment successful! Welcome to ${coursesData[selectedCourse].title}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-bold">Course Enrollment</h1>
            </div>
            <div className="flex items-center space-x-4">
              {/* Progress Steps */}
              <div className="hidden md:flex items-center space-x-2">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div className={`w-8 h-0.5 ${
                        currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Course & Plan Selection */}
            {currentStep === 1 && (
              <div className="space-y-8">
                {/* Course Selection */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Choose Your Course</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(coursesData).map(([key, course]) => (
                      <div
                        key={key}
                        className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                          selectedCourse === key
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedCourse(key)}
                      >
                        <div className={`w-full h-32 bg-gradient-to-r ${course.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                          <div className="text-white text-center">
                            <BookOpen className="w-8 h-8 mx-auto mb-2" />
                            <p className="font-semibold">{course.title.split(' ')[0]}</p>
                          </div>
                        </div>
                        <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            {course.rating}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {course.students}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-green-600">₹{course.discountedPrice.toLocaleString()}</span>
                            <span className="text-sm text-gray-500 line-through ml-2">₹{course.originalPrice.toLocaleString()}</span>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 ${
                            selectedCourse === key
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300'
                          } flex items-center justify-center`}>
                            {selectedCourse === key && <Check className="w-4 h-4 text-white" />}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Selection */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Select Learning Plan</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(plans).map(([key, plan]) => (
                      <div
                        key={key}
                        className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all ${
                          selectedPlan === key
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedPlan(key)}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                              Most Popular
                            </span>
                          </div>
                        )}
                        <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
                        <div className="mb-4">
                          <span className="text-3xl font-bold">₹{plan.price.toLocaleString()}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">₹{plan.originalPrice.toLocaleString()}</span>
                        </div>
                        <ul className="space-y-2 mb-6">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className={`w-6 h-6 rounded-full border-2 ${
                          selectedPlan === key
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        } flex items-center justify-center mx-auto`}>
                          {selectedPlan === key && <Check className="w-4 h-4 text-white" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Personal Information */}
            {currentStep === 2 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your city"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Programming Experience
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="beginner">Complete Beginner</option>
                      <option value="some">Some Experience</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <div className="space-y-6">
                {/* Payment Method */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        paymentMethod === 'card'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <CreditCard className="w-6 h-6 text-blue-600 mr-3" />
                          <span className="font-medium">Credit/Debit Card</span>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 ${
                          paymentMethod === 'card'
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        } flex items-center justify-center`}>
                          {paymentMethod === 'card' && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        paymentMethod === 'upi'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setPaymentMethod('upi')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Smartphone className="w-6 h-6 text-green-600 mr-3" />
                          <span className="font-medium">UPI Payment</span>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 ${
                          paymentMethod === 'upi'
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        } flex items-center justify-center`}>
                          {paymentMethod === 'upi' && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        paymentMethod === 'netbanking'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setPaymentMethod('netbanking')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Building className="w-6 h-6 text-purple-600 mr-3" />
                          <span className="font-medium">Net Banking</span>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 ${
                          paymentMethod === 'netbanking'
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        } flex items-center justify-center`}>
                          {paymentMethod === 'netbanking' && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Form */}
                  {paymentMethod === 'card' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'upi' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        UPI ID
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="yourname@paytm"
                      />
                    </div>
                  )}

                  {paymentMethod === 'netbanking' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Bank
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>State Bank of India</option>
                        <option>HDFC Bank</option>
                        <option>ICICI Bank</option>
                        <option>Axis Bank</option>
                        <option>Punjab National Bank</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
                  currentStep === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              
              {currentStep < 3 ? (
                <button
                  onClick={nextStep}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleEnrollment}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Complete Enrollment
                </button>
              )}
            </div>
          </div>

          {/* Sidebar - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              
              {/* Course Details */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className={`w-full h-24 bg-gradient-to-r ${coursesData[selectedCourse].gradient} rounded-lg mb-4 flex items-center justify-center`}>
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{coursesData[selectedCourse].title}</h4>
                <p className="text-sm text-gray-600 mb-3">{plans[selectedPlan].name}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    {coursesData[selectedCourse].rating}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {coursesData[selectedCourse].duration}
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="font-semibold mb-3">Promo Code</h4>
                {!appliedPromo ? (
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter promo code"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                ) : (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Gift className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-sm font-medium text-green-800">
                          {promoCode.toUpperCase()} Applied
                        </span>
                      </div>
                      <button
                        onClick={removePromoCode}
                        className="text-green-600 hover:text-green-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Course Price</span>
                  <span>₹{plans[selectedPlan].price.toLocaleString()}</span>
                </div>
                {appliedPromo && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{calculateDiscount(plans[selectedPlan].price).toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between"></div>
                // CONTINUING from your last line
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₹{getFinalPrice().toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleEnrollment}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors mt-4"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentPage;
