import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
let $ = require("jquery")

let header = new Headers({
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'text/javascript'
});
class Theme extends Component {
	constructor(props) {
		super(props);
		this.state = {message: 0}
	}
	hanldleClick () {
		
	}
	render() {
		const courseTag = this.props.course.map((el, i) => {
			return (<option key={`t ${i}`} value={el}>{el}</option>)
		})

		function Req () {
			let course = $('#selectCourse').val()
			let theme = $('#theme').val()
			let body = [course, theme]
			let endpoint = 'http://localhost:8080/admin/addtheme'
				let myInit = { method: 'POST',
					   mode: 'cors',
					   header: {header},
					   body: body
					};
			fetch(endpoint, myInit)
				.then(res => res.json())
				.then((res) => {
					if (res.statusEror) {
						$('.mess').text(res.message)
						$('.mess').removeClass('success').addClass('err')

					} else {
						$('.mess').text(res.message)
						$('.mess').removeClass('err').addClass('success')
					}
				})
		}

		return (
			<form action="" id="theme" noValidate>
				<div className="input-group mb-3">
						<input id='theme' type="text" className="form-control" placeholder="Add theme name" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
						<select required className="form-control" id="selectCourse">
							{courseTag}
						</select>
					<div className="input-group-append">
						<button onClick={Req} className="btn btn-outline-secondary" type="button" id="theme">Add fild</button>
					</div>
				</div>
			</form>
		)  
	}
}

export default Theme;