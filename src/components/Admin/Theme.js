import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Theme extends Component {
	render() {

		return (
			<form action="" id="regForm" noValidate>
				<div className="input-group mb-3">
						<input type="text" className="form-control" placeholder="Add theme name" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
					<div className="input-group-append">
						<button className="btn btn-outline-secondary" type="button" id="button-addon2">Add fild</button>
					</div>
				</div>
			</form>
		)  
	}
}

export default Theme;