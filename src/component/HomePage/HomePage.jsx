import React from 'react'
import b1 from "../../assets/banner/desktopbanner.jpg"
import logo from "../../assets/logo/image.png"
import { FaWhatsapp, FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Game from '../Game/Game'
const HomePage = () => {
  return (
    <div 
      className="w-screen h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${b1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100vw'
      }}
    >
      {/* Logo */}
      <img src={logo} alt="logo" className="absolute top-[20rem] right-[20rem]"/>
      
      {/* Social Media Section - Bottom Right */}
      <div className="absolute bottom-8 right-8">
        <div className="text-center mb-4">
          <h3 className="text-white font-bold text-lg tracking-wider">FOLLOW US ON</h3>
        </div>
        <div className="flex gap-2 flex-wrap justify-end">
          {[
            { Icon: FaWhatsapp, name: 'Whatsapp' },
            { Icon: FaFacebook, name: 'Facebook' },
            { Icon: FaXTwitter, name: 'X' },
            { Icon: FaInstagram, name: 'Instagram' },
            { Icon: FaTelegram, name: 'Telegram' },
            { Icon: FaYoutube, name: 'Youtube' }
          ].map(({ Icon, name }) => (
            <button key={name} className="flex items-center gap-2 bg-transparent bg-opacity-60 text-white px-2 py-3 rounded-lg text-sm font-medium border border-yellow-500 border-opacity-70 hover:bg-opacity-80 transition-all duration-300 min-w-[60px]">
              <Icon className="text-yellow-400 text-xl" /> 
              <span>{name}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Game Component - Left Side */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
        <Game />
      </div>
    </div>
  )
}

export default HomePage
