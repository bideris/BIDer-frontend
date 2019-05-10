import React from "react";
import { Form, Modal, Button } from "react-bootstrap";

class ReviewModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      show: false,
      value: ""
    };
  }

  handleClose() {
    this.setState({ show: false, value: "" });
  }

  handleSubmit() {
    this.props.wrResponse(this.props.id, this.state.value);
    this.handleClose();
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <Button variant="success" onClick={this.handleShow}>
          Write a review
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>Write a review about the user: </Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                size="sm"
                as="textarea"
                rows="3"
                onChange={this.handleChange}
                value={this.state.value}
              />
            </Form.Group>
          </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ReviewModal;
