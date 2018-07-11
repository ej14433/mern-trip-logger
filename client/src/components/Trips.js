import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getTrips } from '../actions/tripActions';
import PropTypes from 'prop-types';

import './css/Trips.css';

class Trips extends Component {
	componentDidMount() {
		this.props.getTrips();
	}

	render() {
		const { trips } = this.props.trip;

		return (
			<div>
				<h2>Trips</h2>
				<ListGroup className="group">
					{trips.map(({ _id, skipper, date }) => (
						<ListGroupItem className="justify-content-between">
							<h3>
								{skipper}
							</h3>
							<p>
								{date}
							</p>
						</ListGroupItem>
					))}
				</ListGroup>
			</div>
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

export default connect(mapStateToProps, { getTrips })(Trips);