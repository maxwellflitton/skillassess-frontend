import React, { Component } from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Home from "./components/Home";
import About from "./components/About";
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';


class App extends Component {

  state = {
    loginStatus : false,
    loginMessage: "login"
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header 
          LoginStatus="login" />
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={LoginForm} />
            <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
