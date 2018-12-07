import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
/* let $ = require("jquery") */

class Registration extends Component {
	constructor(props) {
		super(props)
		this.state = {sign: 'in'}
		this.signIn = this.signIn.bind(this)
		this.signUp = this.signUp.bind(this)
	}
	signIn(e) {
		this.setState(()=>({
			sign: 'in'
		}))
		
	}
	signUp() {
		this.setState(()=>({
			sign: 'up'
		}))
	}
	render() {
		const btns = (
			<div id='btns'>
				<button id='signin' onClick={this.signIn} type="button" className="btn btn-primary active sign">sign in</button>
				<button id='signup' onClick={this.signUp} type="button" className="btn btn-primary sign">sign up</button>
			</div>	
		)
		const signinForm = (
			<form action="" id="signInForm" noValidate>
				<div className="input-group mb-3">
					<input id='loginIn' type="text" className="form-control" placeholder="Your Login" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
					<input id='passwordIn' type="password" className="form-control" placeholder="Your password" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
					<button /* onClick={Req} */ className="btn btn-outline-secondary" type="button" id="addTheme">ENTER</button>
				</div>
			</form>
		)
		const signUpForm = (
			<form action="" id="signInForm" noValidate>
				<div className="input-group mb-3">
					<input id='loginUp' type="text" className="form-control" placeholder="Your Login" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
					<input id='passwordUp' type="password" className="form-control" placeholder="Your password" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
					<input id='confirmPasswordUp' type="password" className="form-control" placeholder="Confirm password" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
					<input id='groupe' type="password" className="form-control" placeholder="Your groupe" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
					<button /* onClick={Req} */ className="btn btn-outline-secondary" type="button" id="addTheme">ENTER</button>
				</div>
			</form>
		)
		if (this.state.sign === 'in') {
			return (
				<div className="container">
					{btns}
					<br></br>
					{signinForm}
				</div>
			)
		} else {
			return (
				<div className="container">
					{btns}
					<br></br>
					{signUpForm}
				</div>
			)
		}
		
	}
}
export default Registration