import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Test extends Component {
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
						
						<input type="text" className="form-control" id="inputName" placeholder="Test quest"></input>
						
						<button type="button" className="btn btn-dark">Add Quest</button>
					</div>
				</form>
		)  
	}
}

export default Test;