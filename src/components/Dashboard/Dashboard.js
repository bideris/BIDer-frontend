import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import Picture from "./Picture.js";
import { users } from "../../mock_data/images.js";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      users: users //<---- Mock Data
    };
    this.onRatingClick = this.onRatingClick.bind(this);
  }

  onRatingClick() {
    if (this.state.index === this.state.users.length - 1) {
      this.setState({
        index: 0
      });
    } else {
      this.setState({
        index: this.state.index + 1
      });
    }
  }

  render() {
    return (
      <Jumbotron>
        <Container fluid>
          <Picture imgPaths={this.state.users[this.state.index].imgPaths} />
          <center>
            <Button
              variant="outline-success"
              size="lg"
              onClick={this.onRatingClick}
            >
              <span role="img" aria-label="heart">
                ❤️
              </span>
            </Button>
            <Button
              variant="outline-danger"
              size="lg"
              onClick={this.onRatingClick}
            >
              <span role="img" aria-label="thumbs-down">
                👎
              </span>
            </Button>
          </center>
        </Container>
      </Jumbotron>
    );
  }
}

export default Dashboard;
