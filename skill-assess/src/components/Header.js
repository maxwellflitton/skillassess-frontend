import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

const Header = (props) => {

	const actionTag = props.ActionButtonMessage

	return (
    <header>
      <div className="header">
		 <Link to="/" className="logo">Skill Assess</Link>
		 <div className="header-right">
		   <Link className="active" to={"/" + actionTag}>{actionTag}</Link>
		   <Link to={"/" + props.SecondButton}>{props.SecondButton}</Link>
		   <Link to={"/" + props.ThirdButton}>{props.ThirdButton}</Link>
		 </div>
	  </div>
    </header>
    );

};

export default Header