import React, {Component} from 'react';
import '../css/LoginForm.css';


class LoginForm extends Component {

	state = {
		email: '',
		password: ''
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({email: '', password: ''})
		console.log("the thing is being submitted");
	}

	handlePasswordChange = (e) => {
		this.setState({password: e.target.value})
	}

	handleEmailChange = (e) => {
		this.setState({email: e.target.value})
	}

	render() {
		return (
			<form className="login">
			  <h1 className="login-title">Login</h1>
			  <input type="text" className="login-input" placeholder="Email Address" autoFocus onChange={this.handleEmailChange}
			  value={this.state.email} />
			  <input type="password" className="login-input" placeholder="Password" onChange={this.handlePasswordChange}
			  value={this.state.password} />
			  <input type="submit" value="Lets Go" className="login-button" />
			  <p className="login-lost"><a href="#login">Forgot Password?</a></p>
		    </form>
			);
	}

}


export default LoginForm;
