import { combineReducers } from 'redux';
import tripReducer from './tripReducer';

export default combineReducers({
	trip: tripReducer
});