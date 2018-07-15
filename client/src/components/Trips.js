import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getTrips, deleteTrip } from '../actions/tripActions';
import PropTypes from 'prop-types';

import './css/Trips.css';

class Trips extends Component {

	componentDidMount() {
		// this.props.getTrips();
	}

	onDeleteClick = (id) => {
		this.props.deleteTrip(id);
	}

	render() {
		const { trips } = this.props.trip;
		trips.forEach(trip => {
			trip.date = new Date(trip.date);
		});

		return (
			<Container>
				<h2>Trips</h2>
				<ListGroup className="group">
					{trips.map(({ _id, skipper, date }) => (
						<ListGroupItem
							className="justify-content-between"
							key={_id}>
							<Button
								className="remove-btn float-right"
								color="danger"
								size="small"
								onClick={this.onDeleteClick.bind(this, _id)}
							>&times;</Button>
							<h3>{skipper}</h3>
							<p>{`${date.getDate()}/${date.getMonth() + 1}`}</p>
						</ListGroupItem>
					))}
				</ListGroup>
			</Container>
		);
	}
}

Trips.propTypes = {
	getTrips: PropTypes.func.isRequired,
	trip: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	trip: state.trip
});

export default connect(mapStateToProps, { getTrips, deleteTrip })(Trips);