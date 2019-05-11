import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import users from "../../mock_data/images.js";
import BidPage from "./BidPage";
import ChatPage from "./ChatPage";

class ActiveAuction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.location.state.id,
      bids: users.bids, //<---- Mock Data
      msgs: users.bids //<---- Mock Data
    };
    console.log("Auction for ID: " + this.state.id);
  }

  render() {
    return (
      <Jumbotron>
        <Container fluid>
          <Row>
            <Col>
              <BidPage bids={this.state.bids} />
            </Col>
            <Col>
              <ChatPage msgs={this.state.msgs} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default ActiveAuction;
