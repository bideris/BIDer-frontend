import React from "react";
import { Table, Jumbotron, Container } from "react-bootstrap";
import users from "../../mock_data/images.js";
import Post from "./Post";
import Picture from "../Dashboard/Picture";
import NewPostFormModal from "./NewPostFormModal";

class MyPosts extends React.Component {
  constructor() {
    super();
    this.state = {
      users: users.myPosts //<---- Mock Data
    };
  }

  onSubmit(house, address, imgPaths) {
    console.log(house + address + imgPaths);
  }

  render() {
    return (
      <Jumbotron>
        <Container fluid>
          <center>
            <h1>Your chatas</h1>
            <NewPostFormModal onSubmit={this.onSubmit} />
          </center>
          <Table responsive striped hover>
            <tbody>
              {this.state.users.map((item, index) => {
                return (
                  <tr key={index}>
                    <th>
                      <Picture imgPaths={item.imgPaths} />
                    </th>
                    <th>{item.house}</th>
                    <th>{item.address}</th>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </Jumbotron>
    );
  }
}

export default MyPosts;
