import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaTimes, FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdPhoneAndroid } from 'react-icons/md';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../assets/logo/image.png";

const Signup = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      toast.success('Account created successfully!');
      onClose();
    } catch (error) {
      toast.error(error.message || 'Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    onSwitchToLogin();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-[800px] h-[800px] bg-gradient-to-b from-black via-gray-900 to-yellow-500 rounded-2xl overflow-hidden relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <FaTimes size={20} />
        </button>

        {/* Header Section */}
        <div className="relative h-[200px] bg-gradient-to-b from-black to-transparent">
          {/* Logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <img src={logo} alt="Funin Exchange" className="h-16 mx-auto mb-2" />
          </div>
        </div>

        {/* Signup Form Section */}
        <div className="bg-yellow-500 p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Input */}
            <div className="relative">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.username ? 'border-red-500' : 'border-transparent'
                } outline-none text-gray-700 placeholder-gray-500 focus:border-yellow-400 transition-colors`}
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.email ? 'border-red-500' : 'border-transparent'
                } outline-none text-gray-700 placeholder-gray-500 focus:border-yellow-400 transition-colors`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className={`w-full px-4 py-3 pr-10 rounded-lg border-2 ${
                    errors.password ? 'border-red-500' : 'border-transparent'
                  } outline-none text-gray-700 placeholder-gray-500 focus:border-yellow-400 transition-colors`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  tabIndex="-1"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Phone Input */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone number"
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.phone ? 'border-red-500' : 'border-transparent'
                } outline-none text-gray-700 placeholder-gray-500 focus:border-yellow-400 transition-colors`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Sign Up Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className={`w-full bg-black text-yellow-500 font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Creating Account...' : 'Sign up'}
            </button>

            {/* Login Link */}
            <div className="text-center text-black">
              <span>Already a member? </span>
              <button 
                onClick={handleLoginClick}
                className="text-blue-600 font-semibold hover:underline bg-transparent border-none cursor-pointer"
              >
                Sign in
              </button>
            </div>

            {/* OR Divider */}
            <div className="text-center text-black font-semibold">or</div>

            {/* Social Login Buttons */}
            <div className="flex justify-center space-x-4">
              <button type="button" className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors">
                <FaGoogle className="text-red-500 text-xl" />
              </button>
              <button type="button" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                <FaFacebook className="text-white text-xl" />
              </button>
              <button type="button" className="bg-black p-3 rounded-full hover:bg-gray-800 transition-colors">
                <MdPhoneAndroid className="text-yellow-500 text-xl" />
              </button>
            </div>
          </form>

          {/* Footer Links */}
          <div className="text-center text-xs text-black space-y-1 mt-6">
            <div className="flex flex-wrap justify-center gap-2">
              <a href="#" className="hover:underline whitespace-nowrap">Privacy Policy</a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:underline whitespace-nowrap">Terms and Conditions</a>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <a href="#" className="hover:underline whitespace-nowrap">Rules and Regulations</a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:underline whitespace-nowrap">KYC</a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:underline whitespace-nowrap">Responsible Gaming</a>
            </div>
            <div className="text-center text-xs text-black">
              <span className="font-semibold">About Us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
