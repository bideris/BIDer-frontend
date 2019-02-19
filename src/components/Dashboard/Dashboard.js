import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

class Dashboard extends React.Component {
    render() {
        return (
            <Jumbotron >
                <Container fluid>
                    <h1>Dashboard</h1>
                </Container>
            </Jumbotron>
        );
    }
}

export default Dashboard;