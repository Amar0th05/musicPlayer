import React, { useState, useRef, useEffect } from 'react';
import BirthdayPage from './components/BirthdayPage';
import MusicLibraryPage from './components/MusicLibraryPage';
import MusicPlayerPage from './components/MusicPlayerPage';
import songsData from './data/songsData';
import playlists from './data/playlists';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  // Handle progress bar updates
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  // Handle play/pause based on state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => console.log(err));
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSong]);

  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % currentPlaylist.length;
    setCurrentSongIndex(nextIndex);
    setCurrentSong(currentPlaylist[nextIndex]);
  };

  const prevSong = () => {
    const prevIndex =
      currentSongIndex === 0
        ? currentPlaylist.length - 1
        : currentSongIndex - 1;
    setCurrentSongIndex(prevIndex);
    setCurrentSong(currentPlaylist[prevIndex]);
  };

  return (
    <>
      {currentPage === 1 && (
        <BirthdayPage onStart={() => setCurrentPage(2)} />
      )}

      {currentPage === 2 && (
        <MusicLibraryPage
          setCurrentPage={setCurrentPage}
          setCurrentPlaylist={setCurrentPlaylist}
          setCurrentSong={setCurrentSong}
          setCurrentSongIndex={setCurrentSongIndex}
          songsData={songsData}
          playlists={playlists}
          playSong={(song, playlist, index) => {
            setCurrentSong(song);
            setCurrentPlaylist(playlist);
            setCurrentSongIndex(index);
            setCurrentPage(3);
            setIsPlaying(true);
          }}
        />
      )}

      {currentPage === 3 && currentSong && (
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
  setCurrentTime={setCurrentTime}      // ✅ Add this
  setDuration={setDuration}            // ✅ Add this
/>

      )}
    </>
  );
}

export default App;
