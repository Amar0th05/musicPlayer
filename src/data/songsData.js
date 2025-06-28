// src/data/songsData.js
import ts1 from '../assets/songs/tamil/ts1.mp3';
import ts2 from '../assets/songs/tamil/ts2.mp3';
import ts3 from '../assets/songs/tamil/ts3.mp3';
import ts4 from '../assets/songs/tamil/ts4.mp3';
import ts5 from '../assets/songs/tamil/ts5.mp3';

import es1 from '../assets/songs/english/es1.mp3';
import es2 from '../assets/songs/english/es2.mp3';
import es3 from '../assets/songs/english/es3.mp3';
import es4 from '../assets/songs/english/es4.mp3';
import es5 from '../assets/songs/english/es5.mp3';

//hindi
import hs1 from '../assets/songs/hindi/hs1.mp3';
import hs2 from '../assets/songs/hindi/hs2.mp3';
import hs3 from '../assets/songs/hindi/hs3.mp3';
import hs4 from '../assets/songs/hindi/hs4.mp3';
import hs5 from '../assets/songs/hindi/hs5.mp3';



// tamil
import timg1 from '../assets/images/tamil/img1.jpg';
import timg2 from '../assets/images/tamil/img2.jpg';
import timg3 from '../assets/images/tamil/img3.jpg';
import timg4 from '../assets/images/tamil/img4.jpg';
import timg5 from '../assets/images/tamil/img5.jpg';
// english
import eimg1 from '../assets/images/english/img1.jpeg';
import eimg2 from '../assets/images/english/img2.jpg';
import eimg3 from '../assets/images/english/img3.jpeg';
import eimg4 from '../assets/images/english/img4.jpg';
import eimg5 from '../assets/images/english/img5.jpg';
// hindi
import himg1 from '../assets/images/hindi/img1.webp';
import himg2 from '../assets/images/hindi/img2.jpg';
import himg3 from '../assets/images/hindi/img3.jpg';
import himg4 from '../assets/images/hindi/img4.jpeg';
import himg5 from '../assets/images/hindi/img5.jpg';








const songsData = {
  tamil: [
    { id: 1, title: "Kadhal Kan Kattudhe", artist: "Anirudh Ravichander", audioUrl: ts1 ,duration: "4:12", cover: timg5 },
    { id: 2, title: "Kannazhaga", artist: "Anirudh Ravichander",audioUrl: ts2 ,duration: "4:45", cover: timg1},
    { id: 3, title: "Innum Konjam Naeram", artist: "A.R. Rahman", duration: "5:20",audioUrl: ts3 , cover: timg2},
    { id: 4, title: "Oh Oh", artist: " Anirudh Ravichander", duration: "4:30", audioUrl: ts4 ,cover: timg3},
    { id: 5, title: "Munbe Vaa", artist: "A.R. Rahman", duration: "3:58",audioUrl: ts5 , cover: timg4 },
  ],
  english: [
    { id: 6, title: "Yummy", artist: " Justin Bieber",audioUrl: es1 , duration: "4:23", cover:eimg1 },
    { id: 7, title: "Say So", artist: "Doja Cat", audioUrl: es2 ,duration: "3:53", cover:eimg2  },
    { id: 8, title: "Thinking Out Loud", artist: "",audioUrl: es3 , duration: "4:41", cover:eimg3  },
    { id: 9, title: "Lean On", artist: "MØ, Major Lazer, DJ Snake", audioUrl: es4 ,duration: "4:18", cover:eimg4  },
    { id: 10, title: "Baby", artist: "Justin Bieber",audioUrl: es5 , duration: "4:29", cover:eimg5 },
  ],
  hindi: [
    { id: 11, title: "Ghungroo ", artist: "Vishal–Shekhar", audioUrl:hs1 ,duration: "4:22", cover: himg1 },
    { id: 12, title: "Enna Sona", artist: "Arijit Singh", audioUrl:hs2 ,duration: "4:05", cover: himg2 },
    { id: 13, title: "Duniyaa", artist: " Akhil, Dhvani Bhanushali",audioUrl:hs3 , duration: "3:56", cover: himg3},
    { id: 14, title: "Shayad", artist: "Madhubanti Bagchi",audioUrl:hs4 , duration: "4:28",cover: himg4 },
    { id: 15, title: "Cham Cham", artist: "Monali Thakur, Meet Bros", audioUrl:hs5 ,duration: "3:45", cover: himg5},
  ]
};

export default songsData;