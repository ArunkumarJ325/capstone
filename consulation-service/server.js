const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const consultationRoutes = require('./routes/consultation.routes');

const app = express();
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/consultations', consultationRoutes);
//app.use('/api/lab-tests', require('./routes/lab.routes'));

// Use MONGO_URL from environment if available, otherwise default to localhost
const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/consultation-service';

// Connect to MongoDB
mongoose.connect(mongoUrl)
  .then(() => console.log(`Connected to MongoDB at ${mongoUrl}`))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Start the server
const port = process.env.PORT || 5006;
app.listen(port, () => {
  console.log(`Consultation service running on port ${port}`);
});