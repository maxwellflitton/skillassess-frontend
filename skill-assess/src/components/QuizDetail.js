import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Quiz from "./Quiz";
import Question from "./Question"
import '../css/QuizDetail.css';


class QuizDetail extends Component {

	state = {
		quizTitle: '',
		questions: '',
		completedTime: '0',
		noOfQuestions: '',
	}

	render() {
        return (
        <div className="question container">
            <h1> Title </h1>
            <div className="question">
            <Question 
            question="ranked" />
            </div>
        </div>
//            if (this.props.question == 'MCQ') {
//
//                    <React.Fragment>
//                    <h1 className="Intro">This is a MCQ quiz!</h1>
//                    <h1 className="Description">There are 5 possible answers to each question. Please choose one. </h1>
//                    </React.Fragment>
//            }
//            else if (this.props.question == 'ranked') {
//                    <React.Fragment>
//                    <h1 className="Question">Hello!</h1>
//                    </React.Fragment>
//            } else {
//                    <React.Fragment>
//                    <h1 className="Question">Hello!</h1>
//                    </React.Fragment>
//            }
		)
	}


}


export default QuizDetail;