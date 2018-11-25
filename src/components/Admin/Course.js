import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
let $ = require("jquery")

let header = new Headers({
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'application/json'
});
let course = $('#course').val()
			let endpoint = 'http://localhost:8080/admin/addcourse';
			let myInit = { method: 'POST',
					   mode: 'cors',
					   header: {header},
					   body: course
					};



class Course extends Component {
	constructor(props) {
		super(props);
		this.state = {message: false}
	}
	request(){
		fetch(endpoint, myInit)
				.then(res => res.json())
				.then((res) => {
				
				}) 
		this.setState(() => ({
			message: true
		}))
	} 
	render() {

		
		
		function Request () {
			
			
		}
		return (
				<form action="" id="regForm" noValidate>
					<div className="input-group mb-3">
							<input required type="text" id="course" className="form-control" placeholder="Add Course name" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
  						<div className="input-group-append">
    						<button onClick={Request} className="btn btn-outline-secondary" type="button" id="course">Add fild</button>
						</div>
					</div>
				</form>
		)  
	}
}

export default Course;