import React, {Component} from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class MCQ extends Component {
    state = {
         question: "",
         answers: "",
         clickedAnswer: "",
    }

    clickAnswer = (data) => {
       this.props.passAnswer(data)
    }

    render() {
      return(
      <div className="MCQ">
	  <RadioGroup>
	  {this.props.AnswerList.map( (answer) =>
         <RadioButton value={answer} pointColor="black" rootColor="black" onClick={this.clickAnswer({answer})}>
            {answer}
		 </RadioButton>)}
      </RadioGroup>
	  </div>
    )
    }
    }

export default MCQ
