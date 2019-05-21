import React from "react";
import { Table, Jumbotron, Container } from "react-bootstrap";
import SingleAuctionLine from "./SingleAuctionLine";
import SweetAlert from "react-bootstrap-sweetalert";
import { makeGetRequest } from "../../App/request";

class MyAuctions extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      alert: null
    };
  }

  componentDidMount() {
    makeGetRequest("auction/ended/" + sessionStorage.userID).then(response => {
      this.setState({
        users: response
      });
    });
  }

  handleAccept = id => {
    console.log("Accept:" + id);
    makeGetRequest("auction/accept/" + sessionStorage.userID + "/" + id).then(
      response => {
        this.setState({
          users: response
        });
      }
    );
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
            <h1>Auctions, which have ended and in which you participated</h1>
          </center>
          <Table responsive striped hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((item, index) => {
                return (
                  <SingleAuctionLine
                    key={index}
                    index={item.id}
                    name={item.name}
                    house={
                      item.country + ", " + item.city + ", " + item.houseNumber
                    }
                    sum={item.price}
                    isWinner={
                      sessionStorage.user === item.winner.userName
                        ? true
                        : false
                    }
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

export default MyAuctions;
