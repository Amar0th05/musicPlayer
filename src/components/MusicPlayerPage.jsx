// src/components/MusicPlayerPage.jsx
import React from 'react';
import {
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Heart,
  Volume2,
  Shuffle,
  Repeat,
} from 'lucide-react';

const MusicPlayerPage = ({
  currentSong,
  isPlaying,
  togglePlayPause,
  nextSong,
  prevSong,
  currentTime,
  duration,
  setIsLiked,
  isLiked,
  audioRef,
  setCurrentPage,
  setCurrentTime,  // ✅ make sure this is included
  setDuration      // ✅ and this too
}) => {
const handleSeek = (e) => {
    console.log("ender")
  const rect = e.currentTarget.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const seekTime = (clickX / width) * duration;

  if (audioRef.current) {
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime); // optional: reflect immediately
  }
};


  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
<div className="min-h-screen bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
  <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md shadow-2xl border border-white/10 relative z-10">
    {/* Back Button */}
    <button
      onClick={() => setCurrentPage(2)}
      className="text-white/70 hover:text-white mb-6 transition-colors z-10 relative"
    >
      ← Back to Library
    </button>

    {/* Audio Element */}
    <audio
      ref={audioRef}
      src={currentSong.audioUrl}
      onEnded={nextSong}
      onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
      onLoadedMetadata={(e) => setDuration(e.target.duration)}
    />

    {/* Album Art with Animation */}
    <div className="relative mb-8 mx-auto w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
      {/* Rotating border */}
      <div
        className={`absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 ${
          isPlaying ? 'animate-spin' : ''
        }`}
        style={{ animationDuration: '8s' }}
      >
        <div className="w-full h-full rounded-full bg-black/30 backdrop-blur-xl"></div>
      </div>

      {/* Outer Ring */}
      <div
        className={`absolute inset-0 rounded-full border-2 border-purple-400/50 ${
          isPlaying ? 'animate-ping' : ''
        }`}
        style={{ animationDuration: '2s' }}
      ></div>

      {/* Album Image */}
      <div className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-2xl">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className={`w-full h-full object-cover transition-transform duration-1000 ${
            isPlaying ? 'animate-pulse scale-105' : ''
          }`}
        />
        {/* Background Heart Pulse */}
        {isLiked && (
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-40 h-40 bg-pink-400 rounded-full opacity-20 animate-ping"></div>
          </div>
        )}
      </div>

      {/* Center Dot */}
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg z-20"></div> */}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-full"></div>
    </div>

    {/* Song Info */}
    <div className="text-center mb-8">
      <h1 className="text-2xl font-bold text-white mb-2 animate-fade-in delay-300">{currentSong.title}</h1>
      <p className="text-gray-300 animate-fade-in delay-500">{currentSong.artist}</p>
    </div>

    {/* Progress Bar */}
    <div className="mb-8">
      <div className="w-full bg-gray-700 rounded-full h-2 mb-2 cursor-pointer" onClick={handleSeek}>
        <div
          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm text-gray-400">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>

    {/* Controls */}
    <div className="flex items-center justify-center gap-6 mb-8">
      <button onClick={prevSong} className="text-white/70 hover:text-white transition-colors">
        <SkipBack className="w-8 h-8" />
      </button>
      <button
        onClick={togglePlayPause}
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full p-4 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
      </button>
      <button onClick={nextSong} className="text-white/70 hover:text-white transition-colors">
        <SkipForward className="w-8 h-8" />
      </button>
    </div>

    {/* Additional Controls */}
    <div className="flex items-center justify-between text-gray-400">
      <button className="hover:text-white transition-colors">
        <Shuffle className="w-5 h-5" />
      </button>

      {/* Animated Heart Button */}
      <button onClick={() => setIsLiked(!isLiked)} className="relative hover:scale-110 transition-all duration-300">
        <Heart
          className={`w-6 h-6 transition-all duration-500 ${
            isLiked ? 'text-red-500 fill-red-500 animate-pulse' : 'text-gray-400 hover:text-red-400'
          }`}
        />
        {isLiked && (
          <>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 left-0 animate-ping"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1s',
                  transform: `rotate(${i * 60}deg) translateY(-20px)`
                }}
              >
                <Heart className="w-3 h-3 text-red-400 fill-red-400 opacity-60" />
              </div>
            ))}
            {/* Floating hearts */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            </div>
            <div className="absolute -top-6 -left-4 animate-bounce" style={{ animationDelay: '0.2s' }}>
              <Heart className="w-3 h-3 text-red-300 fill-red-300" />
            </div>
            <div className="absolute -top-6 -right-4 animate-bounce" style={{ animationDelay: '0.4s' }}>
              <Heart className="w-3 h-3 text-pink-300 fill-pink-300" />
            </div>
          </>
        )}
      </button>

      <button className="hover:text-white transition-colors">
        <Repeat className="w-5 h-5" />
      </button>

      <button className="hover:text-white transition-colors">
        <Volume2 className="w-5 h-5" />
      </button>
    </div>
  </div>
</div>

  );
};

function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec.toString().padStart(2, '0')}`;
}

export default MusicPlayerPage;
