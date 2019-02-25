import React, {Component} from 'react';
import '../css/question.css';


class Question extends Component {

	state = {
	    questionType: 'MCQ',
	    questionContent: '',
	    answerContent: '',
		completedTime: '0',
	}

	render(){
			if (this.state.questionType === 'MCQ') {
				return(
				    <div className="question">
                   <React.Fragment>
                   <h1 className="Question">{this.state.questionContent}</h1>
                   </React.Fragment>
                   </div>
                   )
           }
           else if (this.props.questionType === 'ranked') {

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