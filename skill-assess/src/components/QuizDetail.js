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
		questions : [{"question": "this is a placeholder", "answer": null},
		{"question": "this is another placeholder", "answer": null}],
		displayQuestion: {"question": null, "answer": null},
		total: 5
	}

	startTest = () => {
		this.setState({total: this.state.questions.length, displayQuestion: this.state.questions[0]})
		// here is where we will do the API call to get the questions in order to fill in the list of questions
	}

	submitAnswer = (data) => {
	    // 1. Make a shallow copy of the items
        let questions = [...this.state.questions];
        // 2. Make a shallow copy of the item you want to mutate
        let question = {...questions[this.state.questionNumber]};
        // 3. Replace the property you're intested in
        question.answer = data;
        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        questions[this.state.questionNumber] = question;
        // 5. Set the state to our new copy
        this.setState({questions});
	}

	moveForward = (data) => {
		if (this.state.questionNumber === this.state.total - 1) {

		} else {
		    this.submitAnswer(data)
			this.setState({questionNumber: this.state.questionNumber + 1})
		    this.setState({displayQuestion: this.state.questions[this.state.questionNumber]})
		}
	}

	moveBackward = (data) => {
		if (this.state.questionNumber === 0) {

		} else {
		    this.submitAnswer(data)
			this.setState({questionNumber: this.state.questionNumber - 1})
		    this.setState({displayQuestion: this.state.questions[this.state.questionNumber]})
		}
	}

	render() {
        return (
        <div className="questionContainer">
            <h1> {this.state.quizName} </h1>
            <div className="question">
            </div>
            <Question 
            question={this.state.displayQuestion}
            passSubmitAnswer={this.submitAnswer} />
            <button className="start" to={"/"} onClick={this.startTest}>Start</button>
            <button className="questionNavPre"  onClick={this.moveBackward}>Previous</button>
            <button className="questionNavPost" onClick={this.moveForward}>Next</button>
        </div>
		)
	}


}


export default QuizDetail;