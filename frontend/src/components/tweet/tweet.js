import React, { Component } from "react";
import { Button, FormGroup, Input, Col, Row, Form } from "reactstrap";
import "./tweet.css";
import { FaRetweet } from "react-icons/fa";
import axios from "axios";

export default class Tweet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ""
    };
  }

  componentWillMount() {
    this.setState({ id: this.props.id });
  }

  retweet = () => {
    const { id } = this.state;
    axios.post("/retweet/" + id).then(res => {
        alert("Tweet retweetado")
    }).catch(ex => {
        console.log(ex)
        alert("ops... algo saiu errado")
    });
  };

  render() {
    return (
      <div
        style={{
          marginLeft: "20px",
          padding: "25px",
          marginBottom: "40px"
        }}
        className="container"
      >
        <Row>
          <h5>{this.props.name}</h5>
        </Row>
        <Row>
          <div className="container">
            <h6>{this.props.text}</h6>
          </div>
          <FaRetweet
            className="retweet"
            onClick={this.retweet}
          />
        </Row>
      </div>
    );
  }
}
