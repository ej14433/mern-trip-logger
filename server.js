const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Setup Server
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

// Connect to DB
const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true })
	.then(() => console.log('MongoDB Connected.'))
	.catch(err => console.log(err));

// Set routing
const trips = require('./routes/api/trips');
app.use('/api/trips', trips);

// Start listening
app.listen(port, () => console.log(`Server started on port ${port}.`));

// Serve static assets for production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static(path.join(__dirname, 'client/build')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'index.html'));
	});
}
