import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { FaExchangeAlt, FaTrophy, FaHome, FaPlayCircle, FaUserCircle } from "react-icons/fa";
import logo from "../../assets/logo/image.png";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const FuninMobile = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleSignUpClick = () => {
    setIsSignUpOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const handleSwitchToSignUp = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
  };

  const handleSwitchToLogin = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <div className="relative w-[500px] min-h-[800px] mx-auto bg-white rounded-xl overflow-hidden border border-gray-300 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#0a0a0a] px-3 py-2">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-20" />
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleSignUpClick}
            className="bg-yellow-400 flex items-center gap-1 text-black font-semibold px-3 py-4 text-xs rounded"
          >
            <FaUser /> SIGN UP
          </button>
          <button 
            onClick={handleLoginClick}
            className="bg-red-600 flex items-center gap-1 text-white font-semibold px-3 py-4 text-xs rounded"
          >
            <FaLock /> LOGIN
          </button>
        </div>
      </div>

      {/* News Bar */}
      <div className="bg-[#0e1f31] text-white text-xs px-3 py-1">News</div>

      {/* Banner */}
      <div className="w-full h-[120px] bg-gray-300 flex items-center justify-center text-gray-600">
        3000+ LIVE CASINO GAMES (Banner Image)
      </div>

      {/* Live Sports Section */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/360x100"
          alt="Live Sports"
          className="w-full h-[100px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 flex justify-between items-center px-3 py-1">
          <span className="text-white font-semibold text-xs">Live Sports</span>
          <button className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
            Play Now
          </button>
        </div>
        <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded">
          LIVE
        </div>
      </div>

      {/* Two Cards */}
      <div className="grid grid-cols-2 gap-1 mt-1">
        {["Teen Patti", "Andhar Bahar"].map((game) => (
          <div key={game} className="relative">
            <img
              src="https://via.placeholder.com/180x100"
              alt={game}
              className="w-full h-[100px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 flex justify-between items-center px-2 py-1">
              <span className="text-white text-xs font-semibold">{game}</span>
              <button className="bg-yellow-400 text-black text-[10px] px-2 py-0.5 rounded">
                Play Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-around bg-[#0a1b2e] py-2 mt-72">
        {[
          { icon: <FaExchangeAlt />, label: "Exch" },
          { icon: <FaTrophy />, label: "Sports" },
          { icon: <FaHome />, label: "Home", active: true },
          { icon: <FaPlayCircle />, label: "In-Play" },
          { icon: <FaUserCircle />, label: "Account" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-white text-xs">
            <div className={`text-lg ${item.active ? "text-yellow-400" : "text-white"}`}>
              {item.icon}
            </div>
            <span className={item.active ? "text-yellow-400 font-bold" : "text-white"}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Login Modal */}
      <Login 
        isOpen={isLoginOpen}
        onClose={handleCloseLogin}
        onSwitchToSignUp={handleSwitchToSignUp}
      />

      {/* Signup Modal */}
      <Signup 
        isOpen={isSignUpOpen}
        onClose={handleCloseSignUp}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </div>
  );
};

export default FuninMobile;
