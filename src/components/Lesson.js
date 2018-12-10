import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Refresh from './Refresh'

let $ = require("jquery")

let header = new Headers({
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'text/javascript'
});

class Lesson extends Component {
	render() {
		const ltheme = this.props.data.map((el) => {
			let c = el.lcourse
			let t = el.ltheme
			return (`${c} -- ${t}`)
		})
		const courseTag = ltheme.map((el, i) => {
			return (<option key={`lt ${i}`} value={this.props.data[i].ltheme}>{el}</option>)
		})

		function Req () {
			let lesson = $('#lesson').val()
			let theme = $('#selestLessonsTheme').val()
			let body = `${theme}----${lesson}`
			let endpoint = 'http://localhost:8080/admin/addlessons'
				let myInit = { method: 'POST',
					   mode: 'cors',
					   header: {header},
					   body: body
					};
			console.log(body)
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
							Refresh()
						}, 2000)
					}	
				})
		}
		
			return (	
				<form action="" id="lessonsform" noValidate>
					<div className="input-group mb-3">
						<select  required className="form-control" id="selestLessonsTheme">
							{courseTag}
						</select>
						<div className="input-group-append">
							<button onClick={Req} className="btn btn-outline-secondary" type="button" id="addLesson">Add Lesson</button>
						</div>
					</div>
					<div className="input-group mb-3">
						<textarea placeholder="Add Lesson" className="form-control" id="lesson" rows="5"></textarea>
					</div>
				</form>
			)
	}
}

export default Lesson;