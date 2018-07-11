const express = require('express');
const router = express.Router();

// Get Trip model
const Trip = require('../../models/Trips');

// @route POST api/trips
// @desc create a trip
// @access public
router.post('/', (req, res) => {
	const newTrip = new Trip({
		skipper: req.body.skipper,
		date: req.body.date
	});

	newTrip
		.save()
		.then(trip => res.json(trip));
});

// @route GET api/trips
// @desc get trips
// @access public
router.get('/', (req, res) => {
	Trip.find()
		.sort({ date: -1 })
		.then(trips => res.json(trips));
});

// @route DELET api/trips
// @desc  Delete a trip
// @access public
router.delete('/:id', (req, res) => {
	Trip.findById(req.params.id)
		.then(trip => trip.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }));
});

module.exports = router;