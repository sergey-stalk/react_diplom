import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect } from 'react-router-dom'
import Refresh from './Refresh'

let $ = require("jquery")

let header = new Headers({
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'text/javascript'
});

class Registration extends Component {
	constructor(props) {
		super(props)
		this.state = {sign: 'in'}
		this.signIn = this.signIn.bind(this)
		this.signUp = this.signUp.bind(this)
		this.enter = this.enter.bind(this)
	}
	signIn() {
		this.setState(()=>({
			sign: 'in'
		}))
	}
	signUp() {
		this.setState(()=>({
			sign: 'up'
		}))
	}
	enter() {
		let login = $('#loginIn').val()
			let pass = $('#passwordIn').val()
			let body = [login, pass]
			let endpoint = 'http://localhost:8080/enter'
				let myInit = { method: 'POST',
					   mode: 'cors',
					   header: {header},
					   body: body
					};
			fetch(endpoint, myInit)
				.then(res => res.json())
				.then((res) => {
					if (res.statusEror) {
						$('.mess').text(res.message)
						$('.mess').removeClass('success').addClass('err')
						setTimeout(()=>{
							$('.mess').removeClass('err');
							$('.mess').text('');
						}, 2000)

					} else {
						$('.mess').text(res.message)
						$('.mess').removeClass('err').addClass('success')
						setTimeout(()=>{
							$('.mess').removeClass('success');
							$('.mess').text('');
						}, 2000)
						Refresh(login)
						this.setState(()=>({
							sign: 'redirect'
						}))
					}
				})
	}
	
	render() {
		/* function enter() {
			let login = $('#loginIn').val()
			let pass = $('#passwordIn').val()
			let body = [login, pass]
			let endpoint = 'http://localhost:8080/enter'
				let myInit = { method: 'POST',
					   mode: 'cors',
					   header: {header},
					   body: body
					};
			fetch(endpoint, myInit)
				.then(res => res.json())
				.then((res) => {
					if (res.statusEror) {
						$('.mess').text(res.message)
						$('.mess').removeClass('success').addClass('err')
						setTimeout(()=>{
							$('.mess').removeClass('err');
							$('.mess').text('');
						}, 2000)

					} else {
						$('.mess').text(res.message)
						$('.mess').removeClass('err').addClass('success')
						setTimeout(()=>{
							$('.mess').removeClass('success');
							$('.mess').text('');
						}, 2000)
					}
				})
		} */

		function reg() {
			let login = $('#loginUp').val()
			let pass = $('#passwordUp').val()
			let confirmPass = $('#confirmPasswordUp').val()
			let group = $('#groupe').val()
			let body = [login, group, pass, confirmPass]
			let endpoint = 'http://localhost:8080/registration'
				let myInit = { method: 'POST',
					   mode: 'cors',
					   header: {header},
					   body: body
					};
			fetch(endpoint, myInit)
				.then(res => res.json())
				.then((res) => {
					if (res.statusEror) {
						$('.mess').text(res.message)
						$('.mess').removeClass('success').addClass('err')
						setTimeout(()=>{
							$('.mess').removeClass('err');
							$('.mess').text('');
						}, 2000)

					} else {
						$('.mess').text(res.message)
						$('.mess').removeClass('err').addClass('success')
						setTimeout(()=>{
							$('.mess').removeClass('success');
							$('.mess').text('');
						}, 2000)
					}
				})
		}
		const btns = (
			<div id='btns'>
				<button id='signin' onClick={this.signIn} type="button" className="btn btn-primary sign">SIGN UP</button>
				<button id='signup' onClick={this.signUp} type="button" className="btn btn-primary sign">SIGN IN</button>
			</div>	
		)
		const signinForm = (
			<form action="" id="signInForm" noValidate>
				<div className="input-group mb-3">
					<input id='loginIn' type="text" className="form-control" placeholder="Your Login" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
					<input id='passwordIn' type="password" className="form-control" placeholder="Your password" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
					<button onClick={this.enter} className="btn btn-outline-secondary" type="button" id="signIn">ENTER</button>
				</div>
			</form>
		)
		const signUpForm = (
			<form action="" id="signUpForm" noValidate>
				<div className="input-group mb-3">
					<input id='loginUp' type="text" className="form-control" placeholder="Your Login" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
					<input id='groupe' type="text" className="form-control" placeholder="Your groupe" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
					<input id='passwordUp' type="password" className="form-control" placeholder="Your password" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
					<input id='confirmPasswordUp' type="password" className="form-control" placeholder="Confirm password" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
					<button onClick={reg} className="btn btn-outline-secondary" type="button" id="signUp">ENTER</button>
				</div>
			</form>
		)
		if (this.state.sign === 'in') {
			return (
				<div className="container">
					{btns}
					<br></br>
					<div className='mess'></div>
					{signinForm}
				</div>
			)
		} else if (this.state.sign === 'up'){
			return (
				<div className="container">
					{btns}
					<br></br>
					<div className='mess'></div>
					{signUpForm}
				</div>
			)
		} else {
			return <Redirect to="/greeting" />
		}
		
	}
}
export default Registration