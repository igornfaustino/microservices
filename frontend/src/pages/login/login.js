import React, { Component } from "react";
import { Button, Form, Input } from 'reactstrap'
import axios from 'axios';
import "./login.css";

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value })

    }

    submitRequest = event => {
        event.preventDefault();
        axios.post("/auth", {
            username: this.state.email,
            password: this.state.password
        }).then(res => {
            this.props.history.push('/');
        }).catch(ex => {
            console.log(ex)
            alert("Usuario não cadastrado!")
        })
    };



    render() {
        return (
            <div>
                <div className="text-center body">
                    <Form className="form-signin form">
                        <h1 className="h3 mb-3 font-weight-normal">Login -- Twitter com Microsserviços</h1>
                        <Input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={(event) => this.handleChange(event)}
                            required
                            placeholder="Digite seu e-mail"
                            style={{ marginTop: "25%" }} />


                        <Input type="password"
                            name="password"
                            value={this.state.password}
                            onChange={(event) => this.handleChange(event)}
                            required
                            placeholder="Digite sua senha" />

                        <Button className="btn btn-info btn-color margin-button" type="submit" color="primary" disabled={!this.validateForm()} onClick={this.submitRequest}>Entrar!</Button>

                    </Form>

                </div>
            </div>
        );
    }
}

