import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect } from 'react-router-dom'
let $ = require("jquery")

let header = new Headers({
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'text/javascript'
});

class Greeting extends Component {
	constructor(props) {
		super(props)
		this.state = {sign: 'enter'}
		this.exit = this.exit.bind(this)
		this.req = this.req.bind(this)
		this.test = this.test.bind(this)
		
		
	}
	exit() {
		document.cookie = ''
		this.setState(()=>({
			sign: 'exit'
		}))
	}
	req () {
		let body = $('#selectCourseG').val()
		let endpoint = 'http://localhost:8080/getreeting'
		let myInit = { method: 'POST',
					   mode: 'cors',
					   header: {header},
					   body: body
					};
		fetch(endpoint, myInit)
			.then(res => res.json())
			.then((res) => {
				this.setState(()=>({
					data: res
				}))	
			})
	}
	componentWillMount() {
		this.req()
	}
	test () {
		const arrCoo = document.cookie.split(',')
		const coo = arrCoo[0]
		let val = $('#selectCourseG').val()
		let body = [val, coo]
		console.log(body)
		let endpoint = 'http://localhost:8080/addcourse'
		let myInit = { method: 'POST',
					   mode: 'cors',
					   header: {header},
					   body: body
					};
		fetch(endpoint, myInit)
		document.cookie = ``
		document.cookie = `${coo},${val}`
		this.setState(()=>({
			testing: 'run'
		}))
	}
	
	render() {
		let courseTag;
		if (this.state.data !== undefined) {
			courseTag = this.state.data.map((el, i)=>{
				return (<option key={`gc ${i}`} value={el}>{el}</option>) 
			})
		}
		if (document.cookie === '') {
			return (<Redirect to="/" />)
		} else if(this.state.testing === 'run') {
			return (<Redirect to="/test" />)
		} else {
			const name = document.cookie.split(',')
			return (
				<div className="container">
					<div className="wmessa">
						<button onClick={this.exit} id='exit' type="button" className="btn btn-primary sign">EXIT</button>
						<div className="messa">Hello {name[0]}</div>
						<div className="messa">Выберите один из предоставленных курсов</div>
					</div>
					<form action="" id="signInForm" noValidate>
						<div className="input-group mb-3">
							<select required className="form-control" id="selectCourseG">
								{courseTag}
							</select>
							<button onClick={this.test} className="btn btn-outline-secondary" type="button" id="start">ENTER</button>
						</div>
					</form>
				</div>
			)	
		}
	}
}
export default Greeting