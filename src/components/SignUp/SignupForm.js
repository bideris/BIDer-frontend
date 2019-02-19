import React from 'react';
import { makePostRequest } from "../../App/request";
import validateInput from "../../App/Validations/signup";
import TextFieldGroup from "../common/TextFieldGroup";
import { Form, Button } from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import { browserHistory } from 'react-router';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {},
            isLoading: false,
            alert: null
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.showAlert = this.redirectAlert.bind(this);
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
            makePostRequest("rest/user/add", {
                userName: this.state.username,
                email: this.state.email,
                password: this.state.password
            }).then(
                () => {
                    this.redirectAlert();
                },
                ({ data }) => this.setState({ errors: data, isLoading: false })
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
                title="Signed up successfuly!"
                onConfirm={() => browserHistory.push('/login')}
            >
                You can log in now.
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    render() {
        const { errors } = this.state;
        return (

            <Form onSubmit={this.onSubmit}>
                <h1>Sign up</h1>
                <TextFieldGroup
                    error={errors.username}
                    label="Username"
                    onChange={this.onChange}
                    value={this.state.username}
                    field="username"
                />
                <TextFieldGroup
                    error={errors.email}
                    label="Email"
                    onChange={this.onChange}
                    value={this.state.email}
                    field="email"
                    type="Email"
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
                    Sign up
                 </Button>
                {this.state.alert}
            </Form>
        )
    }
}

export default SignupForm;