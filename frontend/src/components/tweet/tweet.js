import React, { Component } from "react";
import { Button, FormGroup, Input, Col, Row, Form } from 'reactstrap'
import './tweet.css'

export default class Tweet extends Component {

    constructor(props) {
        super(props);

        this.state ={
            id: ""
        }
    }

    componentWillMount(){
        this.setState({id: this.props.id})
    }

    render() {
        return (
            <div style={{
                marginLeft: '20px',
                marginBottom: '40px'
            }}>
                <Row>
                    <h5>{this.props.name}</h5>
                </Row>
                <Row>
                    <h6>{this.props.text}</h6>
                </Row>
            </div>
        )
    }

}