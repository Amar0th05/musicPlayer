// src/components/MusicLibraryPage.jsx
import React from 'react';
import { Music, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { object } from 'framer-motion/client';

const containerVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.4 }
  })
};
const MusicLibraryPage = ({ songsData = {}, playlists = [], playSong = () => {} }) => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8"
      initial="hidden"
      animate="show"
      variants={containerVariant}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">Your Music Collection Mam</h1>
          <p className="text-gray-300">Choose your favorite genre or playlist</p>
        </motion.div>

        {/* Spotify Playlists */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {playlists.map((playlist, index) => (
            <motion.a
              custom={index}
              variants={cardVariant}
              initial="hidden"
              animate="show"
              key={playlist.id}
              href={playlist.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <img 
                src={playlist.cover} 
                alt={playlist.name}
                className="w-full h-48 object-fill rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{playlist.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{playlist.description}</p>
              <div className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Play on Spotify
              </div>
            </motion.a>
          ))}
        </div>

        {/* Language Songs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(songsData).map(([language, songs], i) => (
            <motion.div
              key={language}
              className="bg-gray-800 rounded-xl p-6"
              custom={i}
              variants={cardVariant}
              initial="hidden"
              animate="show"
            >
              <h2 className="text-2xl font-bold text-white mb-6 capitalize flex items-center gap-2">
                <Music className="w-6 h-6" />
                {language} Songs
              </h2>
              <div className="space-y-3">
                {songs.map((song, index) => (
                  <motion.div
                    key={song.id}
                    className="flex items-center gap-4 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => playSong(song, songs, index)}
                  >
                    <img 
                      src={song.cover} 
                      alt={song.title}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-medium text-sm">{song.title}</h3>
                      <p className="text-gray-400 text-xs">{song.artist}</p>
                    </div>
                    <div className="text-gray-400 text-xs">{song.duration}</div>
                    <Play className="w-5 h-5 text-gray-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MusicLibraryPage;
