import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Quiz from "./Quiz";
import logo from '../annimation/30.gif'
import '../css/LoginForm.css';


class LoginForm extends Component {

	state = {
		email: '',
		password: '',
		firstName: '',
		loadingStatus: false,
		loginError: false,
		loginErrorMessage: ""
	}

	submitLogin = (e) => {
		e.preventDefault();
		this.setState({loadingStatus: true})
		axios.post("https://skillassess-backend.herokuapp.com/api/v1/rest-auth/login/",
		{headers: {"Access-Control-Allow-Origin": "*",
		"token": "e6939518e217de186929e5f1cd8686c4e300fb3c"}})
		.then(response => {
			this.setState({email: '', password: '', loadingStatus: true})
			this.props.passLoginDetails(response.data["data"]);

			})
			// do function logic here
		.catch(error => {
			console.log(error);
			this.setState({email: '', password: '', firstName: "it's working I think",
				loadingStatus: false, loginError: true, loginErrorMessage: error})
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

		if (this.props.LoginStatus == false && this.state.loadingStatus == false && 
			this.state.loginError === false) {
			return (
				<form className="login" onSubmit={this.submitLogin}>
				  <h1 className="login-title">Login</h1>
				  <input type="text" className="login-input" placeholder="Email Address" autoFocus onChange={this.handleEmailChange}
				  value={this.state.email} />
				  <input type="password" className="login-input" placeholder="Password" onChange={this.handlePasswordChange}
				  value={this.state.password} />
				  <input type="submit" value="Lets Go" className="login-button" />
			    </form>
			);
		}
		else if (this.props.LoginStatus === false && this.state.loadingStatus === true && 
			this.state.loginError === false) {
			return (
			<form className="login" onSubmit={this.submitLogin}>
		      <h1 className="login-title">Logging in</h1>
			  <img src={logo} />
			</form>
			);
		} else if (this.props.LoginStatus === false && this.state.loadingStatus === false && 
			this.state.loginError === true) {
				return (
				<form className="login" onSubmit={this.submitLogin}>
				  <h1 className="login-title">There's an error with the login! Please refresh to try again</h1>
			      <h1 className="login-title">{this.loginErrorMessage}</h1>
				</form>
				)
			} else {
			return (
				<React.Fragment>
				<h1 className="loggedInTitle">Welcome!</h1>
				<h1 className="loggedInTitle">{this.props.UserProfile["firstName"] + " " + this.props.UserProfile["secondName"]}</h1>
				<Link className="quizesEnterButton" to={"/quizes"}>Check Out Your Tests!</Link>
				</React.Fragment>
				)
		}
	}

}


export default LoginForm;
