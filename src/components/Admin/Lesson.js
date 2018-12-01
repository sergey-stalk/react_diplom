import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Request from './Request'
let $ = require("jquery")

class Lesson extends Component {
	constructor(props) {
		super(props);
		this.state = {state: 'none'}
	}
	handleclick(){
		
		this.setState(() => ({
			state: 'course'
		}))
	}
	render() {
		const courseTag = this.props.course.map((el, i) => {
			return (<option key={`t ${i}`} value={el}>{el}</option>)
		})
		let alt;
		function courseChenge() {
			console.log($('#selectCourseLesson').val())
			alt = 'Очко собаки'
		}
		return (	
			<form action="" id="regForm" noValidate>
				<div className="input-group mb-3">
					<select onChange={courseChenge} required className="form-control" id="selectCourseLesson">
						<option value="" className="empty"></option>
						{courseTag}
					</select>
					{alt}
				</div>
				<div className="input-group mb-3">
					<textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
				</div>
				<div className="input-group-append">
					<button onClick={Request} className="btn btn-outline-secondary" type="button" id="theme">Add fild</button>
				</div>
				
			</form>
		)  
	}
}

export default Lesson;