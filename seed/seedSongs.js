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
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
    name: "Cho Anh Gần Em",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db9"),  // ObjectId của nghệ sĩ Trinh
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc6"),  // ObjectId của album Album 2
    image: "choanhxinthem1phut.jpg",
    listens: 200000,
    likes: 15000,
    shares: 600,
    linkAudio: "choanhxinthem1phut.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
  },
  {
    name: "Exit Sign",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db7"),  // ObjectId của nghệ sĩ HIEUTHUHAI
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc4"),  // ObjectId của album Album 1
    image: "exitsign.jpg",
    listens: 1560000,
    likes: 7200,
    shares: 5000,
    linkAudio: "exitsign.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
    name: "Khác Biệt To Lớn",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db9"),  // ObjectId của nghệ sĩ Trinh
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc6"),  // ObjectId của album Album 2
    image: "khacbiettolon.jpg",
    listens: 200000,
    likes: 15000,
    shares: 600,
    linkAudio: "khacbiettolon.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
  },
  {
    name: "Không Thể Say",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db7"),  // ObjectId của nghệ sĩ HIEUTHUHAI
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc4"),  // ObjectId của album Album 1
    image: "khongthesay.jpg",
    listens: 1560000,
    likes: 7200,
    shares: 5000,
    linkAudio: "khongthesay.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
    name: "Người Ấy",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db9"),  // ObjectId của nghệ sĩ Trinh
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc6"),  // ObjectId của album Album 2
    image: "nguoiay.jpg",
    listens: 20000,
    likes: 15000,
    shares: 600,
    linkAudio: "nguoiay.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
  },
  {
    name: "No Love No Life",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db7"),  // ObjectId của nghệ sĩ HIEUTHUHAI
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc4"),  // ObjectId của album Album 1
    image: "nolovenolife.jpg",
    listens: 142000,
    likes: 7200,
    shares: 5000,
    linkAudio: "nolovenolife.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
    name: "Ngủ Một Mình",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db7"),  // ObjectId của nghệ sĩ HIEUTHUHAI
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc4"),  // ObjectId của album Album 1
    image: "ngumotminh.jpg",
    listens: 160000,
    likes: 5200,
    shares: 2000,
    linkAudio: "ngumotminh.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
    name: "Hít Vào Thở Ra",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db8"),  // ObjectId của nghệ sĩ Min
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc5"),  // ObjectId của album Album 2
    image: "hitvaothora.jpg",
    listens: 60000,
    likes: 33000,
    shares: 2000,
    linkAudio: "hitvaothora.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
    name: "Em Mới Là",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db8"),  // ObjectId của nghệ sĩ Min
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc5"),  // ObjectId của album Album 2
    image: "emmoilanguoianhyeu.jpg",
    listens: 60000,
    likes: 33000,
    shares: 2000,
    linkAudio: "emmoilanguoianhyeu.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
    name: "Vệ Tinh",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db7"),  // ObjectId của nghệ sĩ HIEUTHUHAI
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc4"),  // ObjectId của album Album 1
    image: "vetinh.jpg",
    listens: 1500,
    likes: 10000,
    shares: 200,
    linkAudio: "vetinh.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
    name: "Cua",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db7"),  // ObjectId của nghệ sĩ HIEUTHUHAI
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc4"),  // ObjectId của album Album 1
    image: "cua.jpg",
    listens: 1500,
    likes: 10000,
    shares: 200,
    linkAudio: "cua.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
    name: "Vì Yêu",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db8"),  // ObjectId của nghệ sĩ Min
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc5"),  // ObjectId của album Album 2
    image: "viyeucudamdau.jpg",
    listens: 200000,
    likes: 15000,
    shares: 600,
    linkAudio: "viyeucudamdau.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
  },
  {
    name: "Vỡ Tan",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db9"),  // ObjectId của nghệ sĩ Trinh
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc6"),  // ObjectId của album Album 2
    image: "votan.jpg",
    listens: 200000,
    likes: 15000,
    shares: 600,
    linkAudio: "votan.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
  },
  {
    name: "Khác Biệt Hơn",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db9"),  // ObjectId của nghệ sĩ Trinh
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc6"),  // ObjectId của album Album 2
    image: "khacbiettolonhon.jpg",
    listens: 200000,
    likes: 15000,
    shares: 600,
    linkAudio: "khacbiettolonhon.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
  },
  {
    name: "Tâm Sự Tuổi 30",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db9"),  // ObjectId của nghệ sĩ Trinh
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc6"),  // ObjectId của album Album 2
    image: "tamsutuoi30.jpg",
    listens: 200000,
    likes: 15000,
    shares: 600,
    linkAudio: "tamsutuoi30.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
  },
  {
    name: "Trên Tình Bạn",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db8"),  // ObjectId của nghệ sĩ Min
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc5"),  // ObjectId của album Album 2
    image: "trentinhbanduoitinhyeu.jpg",
    listens: 300000,
    likes: 12000,
    shares: 1000,
    linkAudio: "trentinhbanduoitinhyeu.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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
    name: "Đừng Yêu Nữa",
    artist: new mongoose.Types.ObjectId("673a2a5f420d40f7a0504db8"),  // ObjectId của nghệ sĩ Min
    album: new mongoose.Types.ObjectId("673a2dbf420d40f7a0504dc5"),  // ObjectId của album Album 2
    image: "dungyeunuaemmetroi.jpg",
    listens: 300000,
    likes: 12000,
    shares: 1000,
    linkAudio: "dungyeunuaemmetroi.mp3",
    timestamp: new Date("2024-11-12T11:16:18.000Z"),
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