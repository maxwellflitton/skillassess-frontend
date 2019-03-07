import React, {Component} from 'react';
import RankedQuestion from "./RankedQuestion";
import '../css/question.css';


class Question extends Component {

	state = {
	    questionType: 'ranked',
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
           else if (this.state.questionType === 'ranked') {

           		return (
                   <React.Fragment>
                   <h1 className="Question">Hello!</h1>
                   <RankedQuestion 
                   ExampleTag={"this is an example"} />
                   </React.Fragment>
                   )
           } else {
           		return (
                   <React.Fragment>
                   <h1 className="Question">else catch!</h1>

                   </React.Fragment>
                )
           }
	}
}

export default Question