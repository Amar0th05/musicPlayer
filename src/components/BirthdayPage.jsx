// src/components/BirthdayPage.jsx
import React from 'react';
import { Music, Gift, Sparkles } from 'lucide-react';
import introImage from '../assets/images/introimg.jpg';

const BirthdayPage = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="text-white opacity-30" size={20} />
          </div>
        ))}
      </div>

      {/* Main content with staggered fade-in */}
      <div className="text-center z-10 relative">
        <div className="mb-8 opacity-0 animate-fade-in animation-delay-500">
          <Gift className="w-24 h-24 text-white mx-auto mb-4 animate-bounce" />
        </div>

<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-white mb-4 opacity-0 animate-fade-in animation-delay-1000 drop-shadow-lg">
  <span className='text-pink-400'>🎉</span> Happy Birthday Aarthy! <span className='text-pink-400'>💖</span>
</h1>


        <div className="mb-8 opacity-0 animate-fade-in animation-delay-1500">
          <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-8 border-white shadow-2xl animate-pulse">
            <img 
              src={introImage}
              alt="Birthday Girl" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="text-2xl text-white mb-8 font-light opacity-0 animate-fade-in animation-delay-2000">
          A special music collection just for you ✨
        </p>

        <button
          onClick={onStart}
          className="bg-white text-purple-600 px-12 py-4 rounded-full text-xl font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg opacity-0 animate-fade-in animation-delay-2500"
        >
<div className="flex items-center gap-3 text-lg sm:text-xl font-semibold bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text drop-shadow-md animate-fade-in">
  <Music className="w-6 h-6 text-pink-500 animate-bounce-slow" />
  <span>Start Your Musical Journey, Mam 🎶</span>
</div>

        </button>
      </div>

      {/* Keyframes for fade-in */}

    </div>
  );
};

export default BirthdayPage;
