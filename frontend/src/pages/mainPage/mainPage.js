import React, { Component } from "react";
import { Button, FormGroup, Input, Col, Row, Form } from 'reactstrap'
import axios from 'axios';
import querystring from "querystring";
import './mainPage.css'
import Tweet from '../../components/tweet/tweet';

export default class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            tweet: '',
            tweets: [],
        };
    }

    searchTweets = event => {
        this.setState({tweets: []})
        var aux = []
        axios.get("/search?q=" + this.state.search 
        ).then (res => {
            res.data.statuses.forEach(element => {
               var tweet = {
                    id: element.id_str,
                    text: element.text,
                    name: element.user.screen_name
                }
                aux.push(tweet)
            });
            this.setState({tweets: aux})       
        }).catch(e => {
            console.log(e)
        })

    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value })

    }

    render() {

        const tweetList = this.state.tweets.map((tweet, idx) => (<Tweet name={tweet.name} id={tweet.id} text={tweet.text} key={idx}/>))

        return (
            <div>
                <div className="header">
                    <h2>Microsserviços - Twitter</h2>
                </div>
                <Row>
                    <Col className="row-style">
                        <h3>Buscar: </h3>
                        <Row style={{
                            marginTop: '2%', marginLeft: '0px'
                        }}>
                            <FormGroup>
                                <Input
                                    value={this.state.search}
                                    type="search"
                                    name="search"
                                    placeholder="Digite sua busca:"
                                    onChange={(event) => this.handleChange(event)} />
                            </FormGroup>
                            <FormGroup style={{
                                marginLeft: '20px'
                            }}>
                                <Button onClick={this.searchTweets}>Buscar</Button>
                            </FormGroup>
                        </Row>

                        <Row style={{
                            marginTop: '8%', marginLeft: '0px',
                        }}>
                            <h3>Tweetar:</h3>
                        </Row>
                        <Row style={{
                            marginTop: '2%', marginLeft: '0px',
                        }}>
                            <FormGroup>
                                <Input
                                    value={this.state.tweet}
                                    type="text"
                                    name="tweet"
                                    placeholder="Digite seu tweet:"
                                    onChange={(event) => this.handleChange(event)} />
                            </FormGroup>
                            <FormGroup style={{
                                marginLeft: '20px'
                            }}>
                                <Button> Tweetar</Button>
                            </FormGroup>
                        </Row>

                    </Col>
                    <div className="vl"></div>
                    <Col className="tweets">
                        <h3 >Tweets: </h3>
                        {tweetList}
                    </Col>
                </Row>
            </div>

        );
    }
}