// Upgraded version with separate components and dynamic song progress

// File: components/BirthdayMusicPlayer.jsx
import React, { useState, useRef, useEffect } from 'react';
import BirthdayPage from './BirthdayPage';
import MusicLibraryPage from './MusicLibraryPage';
import MusicPlayerPage from './MusicPlayerPage';
import songsData from '../data/songsData';
import playlists from '../data/playlists';

const BirthdayMusicPlayer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', updateProgress);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  const playSong = (song, playlist, index) => {
    setCurrentSong(song);
    setCurrentPlaylist(playlist);
    setCurrentSongIndex(index);
    setCurrentPage(3);
    setIsPlaying(true);
  };

  const togglePlayPause = () => setIsPlaying(!isPlaying);

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % currentPlaylist.length;
    setCurrentSongIndex(nextIndex);
    setCurrentSong(currentPlaylist[nextIndex]);
  };

  const prevSong = () => {
    const prevIndex = currentSongIndex === 0 ? currentPlaylist.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(prevIndex);
    setCurrentSong(currentPlaylist[prevIndex]);
  };

  return (
    <div className="w-full">
      {currentPage === 1 && <BirthdayPage setCurrentPage={setCurrentPage} />}
      {currentPage === 2 && <MusicLibraryPage songsData={songsData} playlists={playlists} playSong={playSong} />}
      {currentPage === 3 && (
        <MusicPlayerPage
          currentSong={currentSong}
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          nextSong={nextSong}
          prevSong={prevSong}
          currentTime={currentTime}
          duration={duration}
          setIsLiked={setIsLiked}
          isLiked={isLiked}
          audioRef={audioRef}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default BirthdayMusicPlayer;
