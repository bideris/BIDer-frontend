import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import TextFieldGroup from "../common/TextFieldGroup";
class MyAuctions extends React.Component {
  constructor() {
    super();
    this.state = {
      alert: null,
      message: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log(this.state.message);
    this.setState({
      message: ""
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <>
        <center>
          <h1>MESSAGES</h1>
        </center>
        <Table responsive striped hover>
          <tbody>
            {this.props.msgs.map((item, index) => {
              return (
                <tr key={index}>
                  <th>{item.name}</th>
                  <th>{item.sum}</th>
                  <th>{item.bidTime}</th>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Form>
          <TextFieldGroup
            onChange={this.onChange}
            value={this.state.message}
            label=""
            placeholder="Message"
            field="message"
          />
          <Button block variant="warning" onClick={this.handleSubmit}>
            SEND
          </Button>
        </Form>
      </>
    );
  }
}

export default MyAuctions;
