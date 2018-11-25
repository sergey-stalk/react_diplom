import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



class Test extends Component {
	render() {
	
		return (
			<form action="" id="regForm" noValidate>
				<div className="input-group mb-3">
					<div className="input-group mb-3">
						<select required className="form-control" id="selectGender">
							<option value="" className="empty"></option>
							
						</select>
						<select required className="form-control" id="selectGender">
							<option value="" className="empty"></option>
							
						</select>
						<select required className="form-control" id="selectGender">
							<option value="" className="empty"></option>
							
						</select>
					</div>
						<input type="text" className="form-control" id="inputName" placeholder="Quest"></input>
					<div className="input-group-append">
						<button onClick={Request} className="btn btn-outline-secondary" type="button" id="theme">Add fild</button>
					</div>
				</div>
			</form>
		)  
	}
}

export default Test;