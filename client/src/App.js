import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import TripModal from './components/TripModal';
import Trips from './components/Trips';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Header />
					<TripModal buttonLabel="Add Trip" />
					<Trips />
				</div>
			</Provider>
		);
	}
}

export default App;
