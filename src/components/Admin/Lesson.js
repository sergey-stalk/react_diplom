import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Lesson extends Component {
	render() {

		return (
				<form action="" id="regForm" noValidate>
					<div className="form-group">
						<select required className="form-control" id="selectGender">
							<option value="" className="empty"></option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
						<select required className="form-control" id="selectGender">
							<option value="" className="empty"></option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
						<select required className="form-control" id="selectGender">
							<option value="" className="empty"></option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
						<textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
						<button type="button" className="btn btn-dark">Add lessons</button>
					</div>
				</form>
		)  
	}
}

export default Lesson;