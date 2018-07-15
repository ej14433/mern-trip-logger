import React, { Component } from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { addTrip } from '../actions/tripActions';

import './css/Modal.css';

class TripModal extends Component {
	state = {
		modal: false,
		skipper: 'Elis',
		date: ''
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		const newTrip = {
			skipper: this.state.skipper,
			date: this.state.date
		};
		this.props.addTrip(newTrip);
		this.toggle();
	}

	render() {
		return (
			<div>
				<Button
					className="margin-2 float-right"
					color="secondary"
					onClick={this.toggle}
				>
					Add Trip
				</Button>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
				>
					<ModalHeader toggle={this.toggle}>Add Trip</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="select">Skipper</Label>
								<Input
									type="select"
									name="skipper"
									id="skipper"
									onChange={this.onChange}
								>
									<option>Elis</option>
									<option>Andy</option>
									<option>John</option>
								</Input>
							</FormGroup>
							<FormGroup>
								<Label for="date">Date</Label>
								<Input type="date" name="date" id="date" placeholder="Date" onChange={this.onChange} />
							</FormGroup>
							{/* <FormGroup>
								<Label for="time">Time</Label>
								<Input type="time" name="time" id="time" />
							</FormGroup> */}
							<Button>Submit</Button>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	trip: state.trip
});

export default connect(mapStateToProps, { addTrip })(TripModal);