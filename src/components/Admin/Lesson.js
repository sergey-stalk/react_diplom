import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Request from './Request'


class Lesson extends Component {
	render() {
		const courseData = this.props.course
		const courseTags = courseData.map((course, i) => {
			return(<option value={course} key={'l' + course + i}>{course}</option>)
		})
		const lThemeData = this.props.theme
		const lThemeTags = lThemeData.map((theme, i) => {
			return(<option value={theme} key={'l' + theme + i}>{theme}</option>)
		})
		const lSubThemeData = this.props.subTheme
		const lSubThemeTags = lSubThemeData.map((subTheme, i) => {
			return(<option value={subTheme} key={'l' + subTheme + i} >{subTheme}</option>)
		})
		return (	
			<form action="" id="regForm" noValidate>
				<div className="input-group mb-3">
					<select required className="form-control" id="selectGender">
						<option value="" className="empty"></option>
						{courseTags}
					</select>
					<select required className="form-control" id="selectGender">
						<option value="" className="empty"></option>
						{lThemeTags}
					</select>
					<select required className="form-control" id="selectGender">
						<option value="" className="empty"></option>
						{lSubThemeTags}
					</select>
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