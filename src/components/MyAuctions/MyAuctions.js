import React from "react";
import { Table, Jumbotron, Container } from "react-bootstrap";
import users from "../../mock_data/images.js";
import SingleAuctionLine from "./SingleAuctionLine";
import SweetAlert from "react-bootstrap-sweetalert";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: users.myAuctions, //<---- Mock Data
      alert: null
    };
  }

  handleAccept = id => {
    console.log("Accept:" + id);
    const getAlert = () => (
      <SweetAlert
        success
        title="Accepted!"
        onConfirm={() => {
          this.setState({ alert: null });
        }}
      />
    );
    this.setState({
      alert: getAlert()
    });
  };

  render() {
    return (
      <Jumbotron>
        <Container fluid>
          <center>
            <h1>Actions, which have ended and in which you participated</h1>
          </center>
          <Table responsive striped hover>
            <tbody>
              {this.state.users.map((item, index) => {
                return (
                  <SingleAuctionLine
                    key={index}
                    index={index}
                    name={item.name}
                    house={item.house}
                    sum={item.sum}
                    status={item.status}
                    accept={this.handleAccept}
                  />
                );
              })}
            </tbody>
          </Table>
        </Container>
        {this.state.alert}
      </Jumbotron>
    );
  }
}

export default Users;
