import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Request from './Request'
let $ = require("jquery")

class Theme extends Component {
	render() {
	const courseTag = this.props.course.map((el, i) => {
		return (<option key={`t ${i}`} value={el}>{el}</option>)
	})

	function resend () {
		let course = $('#selectCourse').val()
		let theme = $('#theme').val()
		Request('theme', course, theme)
	}
	
		return (
			<form action="" id="regForm" noValidate>
				<div className="input-group mb-3">
						<input type="text" className="form-control" placeholder="Add theme name" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
						<select required className="form-control" id="selectCourse">
							{courseTag}
						</select>
					<div className="input-group-append">
						<button onClick={resend} className="btn btn-outline-secondary" type="button" id="theme">Add fild</button>
					</div>
				</div>
			</form>
		)  
	}
}

export default Theme;