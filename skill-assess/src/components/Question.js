import React, {Component} from 'react';

class Question extends Component {

	state = {
		quizTitle: '',
		questions: '',
		completedTime: '0',
		noOfQuestions: '',
	}

	render(){
			if (this.props.question === 'MCQ') {
				return(
                   <React.Fragment>
                   <h1 className="Intro">This is a MCQ quiz!</h1>
                   <h1 className="Description">There are 5 possible answers to each question. Please choose one. </h1>
                   </React.Fragment>
                   )
           }
           else if (this.props.question === 'ranked') {
           		return (
                   <React.Fragment>
                   <h1 className="Question">Hello!</h1>
                   </React.Fragment>
                   )
           } else {
           		return (
                   <React.Fragment>
                   <h1 className="Question">Hello!</h1>
                   </React.Fragment>
                )
           }
	}
}

export default Question