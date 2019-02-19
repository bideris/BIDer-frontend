import React from 'react';
import { makeGetRequest } from "../../App/request";
import validateInput from "../../App/Validations/login";
import TextFieldGroup from "../common/TextFieldGroup";
import { Form, Button } from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import { browserHistory } from 'react-router';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {},
            isLoading: false,
            alert: null
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.showAlert = this.redirectAlert.bind(this);
        this.setSession = this.setSession.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            makeGetRequest("rest/user/" + this.state.username).then(
                response => {
                    if (response.password === this.state.password) {
                        this.redirectAlert();
                    }
                    else (
                        this.setState({ errors: { password: 'Bad credentials' }, isLoading: false })
                    )
                }
            );
        }
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    redirectAlert() {
        const getAlert = () => (
            <SweetAlert
                success
                title="Logged in successfuly!"
                onConfirm={this.setSession}
            />
        );
        this.setState({
            alert: getAlert()
        });
    }

    setSession() {
        sessionStorage.setItem('username', this.state.username)
        sessionStorage.setItem('auth', true)
        browserHistory.push('/dashboard')
    }

    render() {
        const { errors } = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <h1>Log in</h1>
                <TextFieldGroup
                    error={errors.username}
                    label="Username"
                    onChange={this.onChange}
                    value={this.state.username}
                    field="username"
                />
                <TextFieldGroup
                    error={errors.password}
                    label="Password"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                    type="password"
                />
                <Button disabled={this.state.isLoading} variant="dark" type="submit">
                    Log in
                 </Button>
                {this.state.alert}
            </Form>
        )
    }
}

export default LogInForm;