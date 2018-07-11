import { GET_TRIPS, ADD_TRIP, TRIPS_LOADING, DELETE_TRIP } from '../actions/types';

const initialState = {
	trips: [],
	loading: false
};

export default function (state = initialState, action) {
	switch (action.type) {
	case GET_TRIPS:
		return {
			...state,
			trips: action.payload,
			loading: false
		};
	case ADD_TRIP:
		return {
			...state,
			trips: [action.payload, ...state.trips]
		};
	case DELETE_TRIP:
		return {
			...state,
			trips: state.trips.filter(trip => trip._id !== action.payload)
		};
	case TRIPS_LOADING:
		return {
			...state,
			loading: true
		};
	default:
		return state;
	}
}