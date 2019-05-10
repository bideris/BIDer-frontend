import React from "react";
import { Container, Form, Modal, Button } from "react-bootstrap";
import TextFieldGroup from "../common/TextFieldGroup";
import SweetAlert from "react-bootstrap-sweetalert";
import ImageUploader from "react-images-upload";

class NewPostFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      //FORM CREDENTIALS
      house: "",
      address: "",
      imgPaths: "",
      pictures: [],
      picturesURL: [],
      alert: null
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: pictureFiles,
      picturesURL: pictureDataURLs
    });
  }

  handleClose() {
    this.setState({
      show: false,
      house: "",
      address: "",
      imgPaths: "",
      pictures: [],
      picturesURL: [],
      alert: null
    });
  }

  handleSubmit() {
    this.props.onSubmit(
      this.state.house,
      this.state.address,
      this.state.picturesURL
    );
    const getAlert = () => (
      <SweetAlert
        success
        title="Submitted!"
        onConfirm={() => {
          this.setState({ alert: null });
        }}
      />
    );
    this.setState({
      alert: getAlert(),
      show: false,
      house: "",
      address: "",
      imgPaths: ""
    });
  }

  handleShow() {
    this.setState({ show: true });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <>
        <Button block variant="success" onClick={this.handleShow}>
          Add a new post
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new post</Modal.Title>
          </Modal.Header>
          <Form>
            <TextFieldGroup
              label="House"
              onChange={this.onChange}
              value={this.state.house}
              field="house"
            />
            <TextFieldGroup
              label="Address"
              onChange={this.onChange}
              value={this.state.address}
              field="address"
            />
          </Form>
          <Container>
            {this.state.picturesURL.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item}
                  alt={item}
                  style={{ width: "100px", height: "100px", display: "inline" }}
                />
              );
            })}
          </Container>
          <ImageUploader
            buttonText="Choose images"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
        {this.state.alert}
      </>
    );
  }
}

export default NewPostFormModal;
