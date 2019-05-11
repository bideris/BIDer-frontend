import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import TextFieldGroup from "../common/TextFieldGroup";
class MyAuctions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      bid: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log(this.state.bid);
    this.setState({
      bid: ""
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <>
        <center>
          <h1>BIDS</h1>
        </center>
        <Table responsive striped hover>
          <tbody>
            {this.props.bids.map((item, index) => {
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
            value={this.state.bid}
            label=""
            placeholder="BID"
            field="bid"
          />
          <Button block variant="danger" onClick={this.handleSubmit}>
            BID
          </Button>
        </Form>
      </>
    );
  }
}

export default MyAuctions;
