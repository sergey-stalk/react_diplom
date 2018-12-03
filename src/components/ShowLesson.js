import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
let $ = require("jquery")

let header = new Headers({
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'text/javascript'
});

class ShowLesson extends Component {
	render () {
		const ltheme = this.props.data.map((el) => {
			let c = el.lcourse
			let t = el.ltheme
			return (`${c} -- ${t}`)
		})
		const courseTag = ltheme.map((el, i) => {
			return (<option key={`lts ${i}`} value={this.props.data[i].ltheme}>{el}</option>)
		})

		function Req () {
			let lesson = $('#showLessons').val()
			let body = [lesson]
			let endpoint = 'http://localhost:8080/admin/showlesson'
				let myInit = { method: 'POST',
					   mode: 'cors',
					   header: {header},
					   body: body
					};
			console.log(body)
			fetch(endpoint, myInit)
				.then(res => res.json())
				.then((res) => {
					console.log(res.statusEror)
					if (res.statusEror) {
						$('.mess').text(res.message)
						$('.mess').removeClass('success').addClass('err')
						setTimeout(()=>{
							$('.mess').removeClass('err');
							$('.mess').text('');
						}, 2000)
					} else {
						$(".showAria").show()
						$(".showAria").text(res[0])
					}
				})
		}
		return (
				<div className={'container'}>
					<form action="" id="themeform" noValidate>
						<div className="input-group mb-3">
							<select required className="form-control" id="showLessons">
							{courseTag}
							</select>
							<div className="input-group-append">
								<button onClick={Req} className="btn btn-outline-secondary" type="button" id="addTheme">Show Lesson</button>
							</div>
						</div>
					</form>
					<div className='showAria'></div>
				</div>
				
		)
	}
}
export default ShowLesson;