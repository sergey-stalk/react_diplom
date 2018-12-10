import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect } from 'react-router-dom'
let $ = require("jquery")


let header = new Headers({
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'text/javascript'
});

class Testing extends Component {
	constructor(props) {
		super(props)
		this.state = {sign: 'enter'}
		this.check = this.check.bind(this)
	}
	
	check () {
		let id = []
		for (let i = 0; i < this.state.test.length; i++) {
			id[i] = `sel${i}`
		}
		let arrel = id.map((el)=>{
			return ($(`#${el}`))
		})
		let right = 0
		arrel.forEach(el => {
			if ($(el).val() === '1') {
				right = right + 1
			}
		});
		let arrC = document.cookie.split(',')
		let endpoint = 'http://localhost:8080/endtesting'
		let myInit = { method: 'POST',
					   mode: 'cors',
					   header: {header},
					   body: [right, arrC[1]]
					};
		fetch(endpoint, myInit)
		.then(res => res.json())
		.then((res) => {
			this.setState(()=>({
				sign: res[0]
			}))
		})
		
	}
	componentDidMount () {
		let arrC = document.cookie.split(',') 
		let body = arrC
		console.log(body)
		let endpoint = 'http://localhost:8080/gettesting'
		let myInit = { method: 'POST',
					   mode: 'cors',
					   header: {header},
					   body: body
					};
		fetch(endpoint, myInit)
			.then(res => res.json())
			.then((res) => {
				this.setState(()=>({
					sign: res[0]
				}))
				this.setState(()=>({
					test: res[0]
				}))
				this.setState(()=>({
					uns: res[1]
				}))
				this.setState(()=>({
					theme: res[2]
				}))
			})
	}
	render(){
		if (this.state.sign === 'redirect') {
			return (<Redirect to="/lerning" />)
		}
		

		if (this.state.test !== undefined && this.state.uns !== undefined && this.state.theme !== undefined) {
			let name = this.state.test.map((el)=>{
				return el
			})
			let optTag = this.state.uns.map((el,i)=>{
				return (<option key={`qt ${i}`} value={el.rqst}>{el.qstAnswer}</option>)
			})
			let sele = name.map((el, i)=>{
				return (<select key={`s${i}`} required className="form-control" id={`sel${i}`}>{optTag}</select>)
			})
			let block = name.map((el, i)=>{
				return (
					<div key={`div${i}`}>
						<div className="mess">{el}</div>
						{sele[i]}
					</div>
					)
			})
			return (
				<div className="container">
					{block}
					<br />
					<div className="input-group-append">
						<button onClick={this.check} className="btn btn-outline-secondary" type="button" id="check">OK</button>
					</div>
				</div>
			)

		}
		if (this.state.test !== 'red') {
			return (
				<div id="preloader">
					<div id="loader"></div>
				</div>
			)
		}
	}
}

export default Testing