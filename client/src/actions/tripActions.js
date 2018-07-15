import axios from 'axios';
import { GET_TRIPS, ADD_TRIP, DELETE_TRIP, TRIPS_LOADING, GET_TRIPS_BY_DATE } from './types';

export const getTrips = () => dispatch => {
	dispatch(setTripsLoading());
	axios
		.get('api/trips')
		.then(res =>
			dispatch({
				type: GET_TRIPS,
				payload: res.data
			}));
};

export const getTripsByDate = (date) => dispatch => {
	dispatch(setTripsLoading());
	axios
		.get(`api/trips/search?date=${date}`)
		.then(res =>
			dispatch({
				type: GET_TRIPS_BY_DATE,
				payload: res.data
			}));
};

export const addTrip = (trip) => dispatch => {
	axios
		.post('/api/trips', trip)
		.then(res =>
			dispatch({
				type: ADD_TRIP,
				payload: res.data
			})
		);
};

export const deleteTrip = (id) => dispatch => {
	axios
		.delete(`/api/trips/${id}`)
		.then(
			dispatch({
				type: DELETE_TRIP,
				payload: id
			})
		);
};

export const setTripsLoading = () => {
	return {
		type: TRIPS_LOADING
	};
};