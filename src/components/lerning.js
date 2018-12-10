import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect } from 'react-router-dom'
let $ = require("jquery")

let header = new Headers({
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'text/javascript'
});
class Lerning extends Component {
	constructor(props) {
		super(props)
		this.state = {state: 'wait'}
		this.check = this.check.bind(this)
	}
	check() {
		this.setState(()=>({
			state: 'exam'
		}))
	}
	componentDidMount() {
		let arrC = document.cookie.split(',')
		let endpoint = 'http://localhost:8080/givelesson'
		let myInit = { method: 'POST',
					   mode: 'cors',
					   header: {header},
					   body: [arrC[0], arrC[1]]
					};
		fetch(endpoint, myInit)
		.then(res => res.json())
		.then((res) => {
			this.setState(()=>({
				lesson: res
			}))
		})
	}
	render() {
		if (this.state.state === 'exam') {
			return (<Redirect to="/exam" />)
		}
		if (this.state.lesson !== undefined) {
			return (
				<div className="container">
					<br />
					<br />
					<br />
					{this.state.lesson}
					<br />
					<br />
					<br />
					<div className="input-group-append">
						<button onClick={this.check} className="btn btn-outline-secondary" type="button" id="check">CHECK</button>
					</div>
				</div>
				)
		}
		if (this.state.state === "wait" ) {
			return (
				<div id="preloader">
					<div id="loader"></div>
				</div>
			)
		}
		
	}
}
export default Lerning;