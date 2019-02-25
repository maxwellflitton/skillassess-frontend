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
		completedTime: '0',
	}

//    function GoForward{
//
//    }

	render() {
        return (
        <div className="questionContainer">
            <h1> {this.state.quizName} </h1>
            <div className="question">
            </div>
            <Question 
            question="" />
            <Link className="questionNavPre" to={"/quizes"}>Previous</Link>
            <Link className="questionNavPost" to={"/"}>Next</Link>
        </div>
		)
	}


}


export default QuizDetail;