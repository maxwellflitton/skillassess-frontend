import React, {Component} from 'react';
import axios from 'axios';
import '../css/LoginForm.css';


class LoginForm extends Component {

	state = {
		email: '',
		password: ''
	}

	submitLogin = () => {
		axios.get("http://douche")
		.then(response => {
			this.setState({
				// console.log(response.data);
				// this is where we set the state change
			})
			// do function logic here
		})
		.catch(error => {
			console.log(error);
		});
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

	onSubmit() {
		console.log("the button is being pushed");
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
		    </form>
			);
	}

}


export default LoginForm;
