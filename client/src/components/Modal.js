import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import './css/Modal.css';

class ModalExample extends React.Component {
    state = {
    	modal: false
    }

    toggle = () => {
    	this.setState({
    		modal: !this.state.modal
    	});
    }

    render() {
    	return (
    		<div>
    			<Button className="margin-2" color="secondary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
    			<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
    				<ModalHeader toggle={this.toggle}>Add trip</ModalHeader>
    				<ModalBody>
    					<Form>
    						<FormGroup>
    							<Label for="exampleSelect">Select</Label>
    							<Input type="select" name="select" id="exampleSelect">
    								<option>Elis</option>
    								<option>Andy</option>
    								<option>John</option>
    							</Input>
    						</FormGroup>
    						<FormGroup>
    							<Label for="exampleDate">Date</Label>
    							<Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
    						</FormGroup>
    						<FormGroup>
    							<Label for="exampleTime">Time</Label>
    							<Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
    						</FormGroup>
    						<Button>Submit</Button>
    					</Form>
    				</ModalBody>
    			</Modal>
    		</div>
    	);
    }
}

export default ModalExample;