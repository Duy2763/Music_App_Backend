require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000; // Sử dụng biến môi trường PORT

const songRoutes = require('./routes/songRoutes');
const artistRoutes = require('./routes/artistRoutes');
const albumRoutes = require('./routes/albumRoutes');

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

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', songRoutes);
app.use('/api', artistRoutes);
app.use('/api', albumRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
