const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Setup Server
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

// Connect to DB
const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true })
	.then(() => console.log('MongoDB Connected.'))
	.catch(err => console.log(err));

// Start listening
app.listen(port, () => console.log(`Server started on port ${port}.`));

// Set routing
const trips = require('./routes/api/trips');
app.use('/api/trips', trips);