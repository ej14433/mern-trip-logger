import axios from 'axios';
import { GET_TRIPS, TRIPS_LOADING } from './types';

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

export const setTripsLoading = () => {
	return {
		type: TRIPS_LOADING
	};
};