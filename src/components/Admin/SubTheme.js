import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Request from './Request'

class SubTheme extends Component {
	render() {
		
		
		
		return (
			<form action="" id="addSubTheme" noValidate>
				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Add sub theme name" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
					<select onChange={this.change} required className="form-control" id="selectCourse">
						<option value="" className="empty"></option>
						
					</select>
					<select required className="form-control" id="selectTheme">
						<option value="" className="empty"></option>
						
					</select>
					<div className="input-group-append">
						<button onClick={Request} className="btn btn-outline-secondary" type="button" id="subTheme">Add fild</button>
					</div>
				</div>
			</form>
		)  
	}
}

export default SubTheme;