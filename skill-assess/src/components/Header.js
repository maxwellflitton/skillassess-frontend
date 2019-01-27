import React from 'react';
import '../css/header.css';

const Header = (props) => (
    <header>
      <div className="header">
		 <a href="/" className="logo">Skill Assess</a>
		 <div className="header-right">
		   <a className="active" href="/login">{props.LoginStatus}</a>
		   <a href="/contact">Contact</a>
		   <a href="/about">About</a>
		 </div>
	  </div>
    </header>
    );

export default Header