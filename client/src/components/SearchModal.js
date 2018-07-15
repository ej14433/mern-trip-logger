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
import { getTripsByDate } from '../actions/tripActions';

class SearchModal extends Component {

	state = {
		modal: false,
		date: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.getTripsByDate(this.state.date);
		this.toggle();
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		return (
			<div>
				<Button
					className="margin-2"
					color="secondary"
					onClick={this.toggle}
				>
					Search by Date
    			</Button>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
				>
					<ModalHeader toggle={this.toggle}>Search by Date</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="date">Date</Label>
								<Input type="date" name="date" id="date" placeholder="Date" onChange={this.onChange} />
							</FormGroup>
							<Button>Search</Button>
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

export default connect(mapStateToProps, { getTripsByDate })(SearchModal);