import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

const Header = (props) => (
    <header>
      <div className="header">
		 <a href="/" className="logo">Skill Assess</a>
		 <div className="header-right">
		   <Link className="active" to="/login">{props.LoginStatus}</Link>
		   <Link to="/contact">Contact</Link>
		   <Link to="/about">About</Link>
		 </div>
	  </div>
    </header>
    );

export default Header