import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
let $ = require("jquery")

let header = new Headers({
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'application/json'
});

class Course extends Component {
	render() {
		
		function Req () {
			const course = $('#course').val()
			let endpoint = 'http://localhost:8080/admin/addcourse'
			let myInit = { method: 'POST',
					   mode: 'cors',
					   header: {header},
					   body: course
					};
			fetch(endpoint, myInit)
				.then(res => res.json())
				.then((res) => {
					if (res.statusEror) {
						$('.mess').text(res.message)
						$('.mess').removeClass('success').addClass('err')
						setTimeout(()=>{
							$('.mess').removeClass('err');
							$('.mess').text('');
						}, 2000)

					} else {
						$('.mess').text(res.message)
						$('.mess').removeClass('err').addClass('success')
						setTimeout(()=>{
							$('.mess').removeClass('success');
							$('.mess').text('');
						}, 2000)
					}
				})
		}
		return (
				<form action="" id="courseForm" noValidate>
					<div className="input-group mb-3">
							<input required type="text" id="course" className="form-control" placeholder="Add Course name" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
  						<div className="input-group-append">
    						<button onClick={Req} className="btn btn-outline-secondary" type="button" id="course">Add Course</button>
						</div>
					</div>
				</form>
		)  
	}
}

export default Course;