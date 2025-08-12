import React from 'react';
import { FaGoogle, FaFacebookF, FaMobileAlt, FaFacebook, FaWhatsapp, FaTelegramPlane, FaTimesCircle, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function LoginComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-500">
      {/* Footer Links Section */}
      <div className="bg-yellow-500 w-full py-4 flex flex-col items-center">
        <div className="flex items-center space-x-4 mb-2">
          <FaGoogle className="text-2xl" />
          <FaFacebookF className="text-2xl" />
          <FaMobileAlt className="text-2xl" />
        </div>
        <div className="text-center text-sm space-x-2">
          <a href="#" className="font-semibold underline">Privacy Policy</a> |
          <a href="#" className="font-semibold underline">Terms and Conditions</a> |
          <a href="#" className="font-semibold underline">Rules and Regulations</a> |
          <a href="#" className="font-semibold underline">KYC</a> |
          <a href="#" className="font-semibold underline">Responsible Gaming</a> |
          <a href="#" className="font-semibold underline">About Us</a>
        </div>
      </div>

      {/* Social Icons Row */}
      <div className="bg-yellow-700 w-full py-3 flex justify-center space-x-6 text-2xl text-yellow-200">
        <FaFacebook />
        <FaWhatsapp />
        <FaTelegramPlane />
        <FaTimesCircle />
        <FaInstagram />
        <FaYoutube />
      </div>

      {/* Brand Name */}
      <div className="bg-yellow-700 text-white py-2 text-center font-semibold">
        BetinexchangeIN
      </div>

      {/* Login Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-yellow-500 rounded-md shadow-lg overflow-hidden">
        {/* Header with Background */}
        <div className="relative h-48 bg-black">
          <img
            src="https://via.placeholder.com/400x200" // Replace with your logo background
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl font-bold">FUNIN EXCHANGE</h1>
          </div>
          <button className="absolute top-4 right-4 text-white text-2xl">
            <FaTimesCircle />
          </button>
        </div>

        {/* Login Form */}
        <div className="p-6 bg-yellow-500">
          <input
            type="text"
            placeholder="Username / Email / Phone"
            className="w-full border border-gray-400 rounded-md px-3 py-2 mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-400 rounded-md px-3 py-2 mb-4"
          />
          <button className="w-full bg-black text-white py-2 rounded-md font-bold mb-3">
            Login
          </button>
          <div className="text-center text-sm">
            Don’t have an account?{' '}
            <a href="#" className="text-blue-600 font-semibold">
              Sign Up
            </a>
          </div>
          <div className="text-center text-sm mt-2">
            <a href="#" className="underline">Forgot Password ?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
