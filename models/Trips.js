const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
	skipper: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Trip = mongoose.model('trip', TripSchema);