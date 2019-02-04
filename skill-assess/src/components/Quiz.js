import React from 'react';
import { Link } from 'react-router-dom';
import '../css/quiz.css'

const Quiz = (props) => {
	return (
		<div className="quizDiv">
		 <h2>{props.title}</h2>
		 <h3>{props.department}</h3>
		 <p>{props.description}</p>
		 <p></p>
	     <Link className="quizEnterButton" to={"/quiz/" + props.id}>Take Quiz</Link>
	  </div>
		);
};


const Quizes = (props) => {

	return (
		<React.Fragment>
		 <h1>Your Quizes</h1>
         {props.QuizList.map( (quiz) =>
			<Quiz 
			title={quiz.title}
			department={quiz.department}
			description={quiz.description}
			id={quiz.id} /> 
			)}
        </React.Fragment>
	  );

    };

export default Quizes