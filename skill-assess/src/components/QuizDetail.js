import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Quiz from "./Quiz";
import Question from "./Question";
import '../css/QuizDetail.css';

class QuizDetail extends Component {

	state = {
	    quizType: '',
	    quizName: 'Basic Anatomy',
		completedTime: 0,
		questionNumber : 0,
		questions : ["this is a placeholder", "this is another placeholder"],
		displayQuestion: null, 
		total: null 
	}

	startTest = () => {
		this.setState({total: this.state.questions.length, displayQuestion: this.state.questions[0]})
		// here is where we will do the API call to get the questions in order to fill in the list of questions
	}

	submitAnswer = () => {
		// here we will update the displayQuestion answer attribute  
	}

	moveForward = () => {
		if (this.state.questionNumber === this.state.total - 1) {

		} else {
			this.setState({questionNumber: this.state.questionNumber + 1})
		    this.setState({displayQuestion: this.state.questions[this.state.questionNumber]})
		}
	}

	moveBackward = () => {
		if (this.state.questionNumber === 0) {

		} else {
			this.setState({questionNumber: this.state.questionNumber - 1})
		    this.setState({displayQuestion: this.state.questions[this.state.questionNumber]})
		}
	}

	render() {
        return (
        <div className="questionContainer">
        <button className="questionNavPost" to={"/"} onClick={this.startTest}>Start</button>
            <h1> {this.state.quizName} </h1>
            <div className="question">
            {/* A JSX comment */}
            </div>
            <Question 
            question={this.state.displayQuestion} />
            <button className="questionNavPre" to={"/"} onClick={this.moveBackward}>Previous</button>
            <button className="questionNavPost" to={"/"} onClick={this.moveForward}>Next</button>
        </div>
		)
	}


}


export default QuizDetail;