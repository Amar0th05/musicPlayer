// src/data/playlists.js

import songsData from './songsData';
import img1 from '../assets/images/im1.jpg';
import img2 from '../assets/images/im2.jpg';
import img3 from '../assets/images/im3.jpg';


const playlists = [
  {
    id: 1,
    name: "Tamil Songs",
    description: "Love songs for special moments",
    cover: img1,
    songs: [...songsData.tamil.slice(0, 5), ...songsData.english.slice(0, 5), ...songsData.hindi.slice(0, 5)],
    spotifyUrl: "https://open.spotify.com/playlist/0Uz1zwyT8wENamxMY9LcmH?si=wuLnhewhRa-hGsOJEreM1Q"
  },
  {
    id: 2,
    name: "English Song",
    description: "Celebration songs",
    cover: img2,
    songs: [...songsData.english.slice(0, 5), ...songsData.hindi.slice(0, 5), ...songsData.tamil.slice(0, 5)],
    spotifyUrl: "https://open.spotify.com/playlist/3ohEQ7p6hAebn7CpNtPNQd?si=rE5RBjwMTnKgkh3aT--okA"
  },
  {
    id: 3,
    name: "Hindi Song",
    description: "Soulful romantic tracks",
    cover: img3,
    songs: [...songsData.hindi.slice(0, 5), ...songsData.tamil.slice(0, 5), ...songsData.english.slice(0, 5)],
    spotifyUrl: "https://open.spotify.com/playlist/1JKEqW7FGyDjddOgoPyTQ3?si=lX7m1cWbSg25P3hNoErDcQ"
  }
];

export default playlists;
