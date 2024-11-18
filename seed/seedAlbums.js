require('dotenv').config();
const mongoose = require('mongoose');
const Album = require('../models/Album'); // Đảm bảo đường dẫn đúng tới file Album.js

mongoose.connect(process.env.MONGODB_URI, { // Sử dụng biến môi trường MONGODB_URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const albums = [
  {
    _id: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc4"),
    name: "Monday",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db7"),  // ObjectId của nghệ sĩ HIEUTHUHAI
    image: "hieuthuhai.jpg",
    followers: 500000
  },
  {
    _id: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc5"),
    name: "50/50",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db8"),  // ObjectId của nghệ sĩ Min
    image: "min.jpg",
    followers: 300000
  },
  {
    _id: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc6"),
    name: "The First",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db9"),  // ObjectId của nghệ sĩ Trịnh Thăng Binh
    image: "trinhthangbinh.jpg",
    followers: 450000
  }
];

Album.insertMany(albums)
  .then(() => {
    console.log('Data inserted successfully');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
    mongoose.connection.close();
  });