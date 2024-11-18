require('dotenv').config();
const mongoose = require('mongoose');
const Artist = require('../models/Artist'); // Đảm bảo đường dẫn đúng tới file Artist.js

mongoose.connect(process.env.MONGODB_URI, { // Sử dụng biến môi trường MONGODB_URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const artists = [
  {
    _id: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db7"),
    name: "HIEUTHUHAI",
    image: "hieuthuhai.jpg",
    followers: 1200000,
    about: {
      image: "hieuthuhai.jpg",
      description: "Hieuthuhai tên thật là Trần Minh Hiếu, sinh năm 1999, cựu sinh viên Đại học Kinh tế TPHCM. Ngoài âm nhạc, anh còn được chú ý bởi vẻ ngoài điển trai và phong cách trình diễn quyến rũ. Hieuthuhai nổi tiếng từ chương trình King of Rap 2020."
    }
  },
  {
    _id: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db8"),
    name: "Min",
    image: "min.jpg",
    followers: 700000,
    about: {
      image: "min.jpg",
      description: "Nguyễn Minh Hằng (sinh ngày 7 tháng 12 năm 1988), thường được biết đến với nghệ danh Min (cách điệu là MIN), là một nữ ca sĩ kiêm vũ công người Việt Nam. Khởi đầu là thành viên của nhóm nhảy St.319."
    }
  },
  {
    _id: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db9"),
    name: "Trịnh Thăng Binh",
    image: "trinhthangbinh.jpg",
    followers: 920000,
    about: {
      image: "trinhthangbinh.jpg",
      description: "Trịnh Thăng Bình là một trong những ca nhạc sĩ nổi tiếng trong showbiz Việt. Bắt đầu dậy sóng với ca khúc ‘Người ấy’ sau đó là ‘Đã biết sẽ có ngày hôm qua’… đến bản hit phá đảo ‘Tâm sự tuổi 30’ đã đưa tên tuổi Trịnh Thăng Bình trở thành top những ca sĩ được yêu thích nhất."
    }
  }
];

Artist.insertMany(artists)
  .then(() => {
    console.log('Data inserted successfully');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
    mongoose.connection.close();
  });