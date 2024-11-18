require('dotenv').config(); 
const mongoose = require('mongoose');
const Song = require('../models/Song'); // Đảm bảo đường dẫn đúng tới file Song.js

mongoose.connect(process.env.MONGODB_URI, { // Sử dụng biến môi trường MONGODB_URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const songs = [
  {
    name: "Nghe Như Tình Yêu",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db7"),  // ObjectId của nghệ sĩ HIEUTHUHAI
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc4"),  // ObjectId của album Album 1
    image: "nghenhutinhyeu.jpg",
    listens: 150000,
    likes: 12000,
    shares: 500,
    linkAudio: "nghenhutinhyeu.mp3",
    comments: [
      {
        text: "Hay quá!",
        timestamp: new Date("2024-11-12T11:14:18.000Z"),
        likes: 100,
        user: {
          id: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504dbb"),
          name: "Duy Tran",
          image: "hieuthuhai.jpg"
        },
        replies: [
          {
            text: "Đồng ý!",
            timestamp: new Date("2024-11-12T11:15:18.000Z"),
            likes: 50,
            user: {
              id: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504dbc"),
              name: "Long Nguyen",
              image: "trinhthangbinh.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    name: "Có Em Chờ",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db8"),  // ObjectId của nghệ sĩ Min
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc5"),  // ObjectId của album Album 2
    image: "coemcho.jpg",
    listens: 200000,
    likes: 15000,
    shares: 600,
    linkAudio: "coemcho.mp3",
    comments: [
      {
        text: "Tuyệt vời!",
        timestamp: new Date("2024-11-12T11:16:18.000Z"),
        likes: 200,
        user: {
          id: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504dbd"),
          name: "Akira Phan",
          image: "hieuthuhai.jpg"
        },
        replies: [
          {
            text: "Quá hay!",
            timestamp: new Date("2024-11-12T11:17:18.000Z"),
            likes: 80,
            user: {
              id: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504dbe"),
              name: "Jenny",
              image: "min.jpg"
            }
          },
          {
            text: "Đúng!",
            timestamp: new Date("2024-11-12T11:17:18.000Z"),
            likes: 80,
            user: {
              id: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504dbe"),
              name: "LJ",
              image: "trinhthangbinh.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    name: "Seen",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db9"),  // ObjectId của nghệ sĩ Trinh
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc6"),  // ObjectId của album Album 2
    image: "seen.jpg",
    listens: 200000,
    likes: 15000,
    shares: 600,
    linkAudio: "seen.mp3",
    comments: [
      {
        text: "Tuyệt vời!",
        timestamp: new Date("2024-11-12T11:16:18.000Z"),
        likes: 200,
        user: {
          id: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504dbd"),
          name: "Tuấn Trần",
          image: "hieuthuhai.jpg"
        },
        replies: [
          {
            text: "Hợp ní!",
            timestamp: new Date("2024-11-12T11:17:18.000Z"),
            likes: 80,
            user: {
              id: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504dbe"),
              name: "Vinh Phan",
              image: "trinhthangbinh.jpg"
            }
          }
        ]
      }
    ]
  }
];

Song.insertMany(songs)
  .then(() => {
    console.log('Data inserted successfully');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
    mongoose.connection.close();
  });