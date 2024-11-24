require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001; // Sử dụng biến môi trường PORT

const songRoutes = require('./routes/songRoutes');
const artistRoutes = require('./routes/artistRoutes');
const albumRoutes = require('./routes/albumRoutes');
const userRoutes = require('./routes/userRoutes');


// Cấu hình CORS
app.use(cors());

// Middleware
app.use(bodyParser.json());
// Cấu hình để phục vụ các tệp tĩnh từ thư mục 'assets'
// app.use('/assets', express.static(path.join(__dirname, 'assets')));
// app.use('/assets/audios', express.static(path.join(__dirname, 'assets/audios')));
// app.use('/assets/images', express.static(path.join(__dirname, 'assets/images')));

app.use('/assets/images/album', express.static(path.join(__dirname, 'assets/images/album')));
app.use('/assets/images/artist', express.static(path.join(__dirname, 'assets/images/artist')));
app.use('/assets/images/banner', express.static(path.join(__dirname, 'assets/images/banner')));
app.use('/assets/images/song', express.static(path.join(__dirname, 'assets/images/song')));
app.use('/assets/images/chart', express.static(path.join(__dirname, 'assets/images/chart')));
app.use('/assets/audios', express.static(path.join(__dirname, 'assets/audios')));

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URI, { // Sử dụng biến môi trường MONGODB_URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});



// Routes
app.use('/', songRoutes);
app.use('/', artistRoutes);
app.use('/', albumRoutes);
app.use('/', userRoutes)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
