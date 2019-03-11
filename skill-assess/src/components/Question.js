import React, {Component} from 'react';
import '../css/question.css';
import MCQ from './mcq';

class Question extends Component {

	state = {
	    questionType: 'MCQ',
	    questionContent: '',
	    answerContent: ["6", "5", "4", "There are no bones in neck"],
		completedTime: '0',
	}

	Answer = (data) => {
	    this.props.passSubmitAnswer(data)
	}

	render(){
			if (this.state.questionType === 'MCQ') {
				return(
				    <div className="question">
                   <React.Fragment>
                   <h2 className="Question">{this.props.question["question"]}</h2>

                   <MCQ AnswerList={this.state.answerContent}
                   passAnswer={this.Answer}
                   />
                   </React.Fragment>
                   </div>
                   )
           }
           else if (this.state.questionType === 'ranked') {

           		return (
                   <React.Fragment>
                   <h1 className="Question">Hello!</h1>
                   </React.Fragment>
                   )
           } else {
           		return (
                   <React.Fragment>
                   <h1 className="Question">Hi!</h1>

                   </React.Fragment>
                )
           }
	}
}

export default Question