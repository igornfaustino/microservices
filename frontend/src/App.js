import React, { Component } from 'react';
import './App.css';
import MainPage from '../src/pages/mainPage/mainPage'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Login from '../src/pages/login/login'; 


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact={true} component={Login} />
          <Route path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
