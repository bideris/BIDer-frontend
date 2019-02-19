import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import LogInForm from '../LogIn/LogInForm';

class LogInPage extends React.Component {
    render() {
        return (
            <Jumbotron >
                <Container fluid>
                    <LogInForm />
                </Container>
            </Jumbotron>
        );
    }
}

export default LogInPage;