import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect } from 'react-router-dom'

class Greeting extends Component {
	constructor(props) {
		super(props)
		this.state = {login: `${this.props.user}`}
		this.und = this.und.bind(this)
	}
	und() {
		this.setState(()=>({
			login: 'ref'
		}))
	}
	render() {
		if (this.props.login != '') {
			return (<div>{`Hello ${this.props.user}`}</div>)	
		}
		else {
			this.und()
			return <Redirect to="/" />
		}
		
		
	}
}
export default Greeting