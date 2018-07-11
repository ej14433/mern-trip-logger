import { GET_TRIPS, TRIPS_LOADING } from '../actions/types';

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
	case TRIPS_LOADING:
		return {
			...state,
			loading: true
		};
	default:
		return state;
	}
}