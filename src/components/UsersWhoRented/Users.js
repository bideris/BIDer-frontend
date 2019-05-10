import React from "react";
import { Table, Jumbotron, Container } from "react-bootstrap";
import users from "../../mock_data/images.js";
import SingleUserLine from "./SingleUserLine";
import SweetAlert from "react-bootstrap-sweetalert";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: users.usersRented, //<---- Mock Data
      alert: null
    };
  }

  handleDelete = id => {
    console.log("Delete:" + id);
    const getAlert = () => (
      <SweetAlert
        warning
        title="Deleted"
        onConfirm={() => {
          this.setState({ alert: null });
        }}
      />
    );
    this.setState({
      alert: getAlert()
    });
  };

  wrResponse = (id, response) => {
    console.log("Write response for " + id + ", the response is : " + response);
  };

  render() {
    return (
      <Jumbotron>
        <Container fluid>
          <center>
            <h1>Users, who rented your chatas</h1>
          </center>
          <Table responsive striped hover>
            <tbody>
              {this.state.users.map((item, index) => {
                return (
                  <SingleUserLine
                    key={index}
                    index={index}
                    name={item.name}
                    surname={item.surname}
                    house={item.house}
                    address={item.address}
                    delete={this.handleDelete}
                    wrResponse={this.wrResponse}
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
