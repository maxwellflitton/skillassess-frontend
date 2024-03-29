import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Quizes from "./components/Quiz";
import QuizDetail from "./components/QuizDetail"
import Question from "./components/Question"

import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';


class App extends Component {

  state = {
    loginStatus : false,
    actionButtonMessage: "login",
    userProfile: {},
    authToken: "",
    secondButton: "contact",
    thirdButton: "about",
    quizes : [
      {
        "title": "Basic Drug Calculations",
        "department": "ULCH Renal",
        "description": "Drug calculations for band 5 nursing applicants",
        "id": 1
      },
      {
        "title": "Basic Situation Awareness",
        "department": "ULCH Renal",
        "description": "Awareness situations for band 5 nursing applicants",
        "id": 2
      },
      {
        "title": "Basic Drug Calculations",
        "department": "ULCH Renal",
        "description": "Drug calculations for band 5 nursing applicants",
        "id": 3
      },
      {
        "title": "Basic Drug Calculations",
        "department": "ULCH A and E",
        "description": "Drug calculations for band 5 nursing applicants",
        "id": 4
      },
      {
        "title": "Advanced Life Support",
        "department": "ULCH ITU",
        "description": "Advanced Life Support",
        "id": 5
      }
    ],
    quizDetail : "",
  };

  handlePassLoginDetails = (data) => {
    this.setState({
      userProfile: {
        firstName: data["first_name"],
        secondName: data["last_name"]
      },
      actionButtonMessage:"quizes",
      loginStatus : true,
      secondButton: "dashboard",
      thirdButton: "logout"
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header 
          LoginStatus={this.state.loginStatus}
          ActionButtonMessage={this.state.actionButtonMessage}
          SecondButton={this.state.secondButton}
          ThirdButton={this.state.thirdButton} />

            <Route exact path="/" component={Home}/>
            <Route path="/login" component={() => <LoginForm passLoginDetails={this.handlePassLoginDetails}
            LoginStatus={this.state.loginStatus} UserProfile = {this.state.userProfile}
          QuizList={this.state.quizes} />} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/quizes" component={() => <Quizes QuizList={this.state.quizes} />} />

           <Route exact path="/QuizDetail" component={QuizDetail}/>


        </div>
      </BrowserRouter>
    );
  }
}

export default App;
