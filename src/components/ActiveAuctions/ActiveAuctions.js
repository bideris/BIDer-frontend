import React from "react";
import { Table, Jumbotron, Container } from "react-bootstrap";
import users from "../../mock_data/images.js";
import SingleActiveAuctionLine from "./SingleActiveAuctionLine";
import { browserHistory } from "react-router";
class ActiveAuctions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users.activeAuctions, //<---- Mock Data
      alert: null
    };
    this.handleParticipate = this.handleParticipate.bind(this);
  }

  handleParticipate = id => {
    //Handle participate - launch chat/bid page
    console.log("Participate:" + id);
    browserHistory.push({
      pathname: "/activeauction",
      state: {
        id: id
      }
    });
  };

  render() {
    return (
      <Jumbotron>
        <Container fluid>
          <center>
            <h1>Active auctions</h1>
          </center>
          <Table responsive striped hover>
            <tbody>
              {this.state.users.map((item, index) => {
                return (
                  <SingleActiveAuctionLine
                    key={index}
                    index={index}
                    name={item.name}
                    house={item.house}
                    sum={item.sum}
                    startDate={item.startDate}
                    bidStarted={item.bidStarted}
                    participate={this.handleParticipate}
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

export default ActiveAuctions;
