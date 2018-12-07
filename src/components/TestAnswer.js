import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Refresh from './Refresh'
let $ = require("jquery")


let header = new Headers({
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'text/javascript'
});


class TestAnswer extends Component {
	render() {
		const courseTag = this.props.test.map((el, i) => {
			return (<option key={`ta ${i}`} value={el}>{el}</option>)
		})
		function Req () {
			let answer = $('#inputTestAnswer').val()
			let test = $('#selectTestAnswerTheme').val()
			let right
			if ($('#exampleCheck2').is(':checked')) {
				right = '1'
			} else {
				right = '0'
			}

			let body = [test,answer,right]
			let endpoint = 'http://localhost:8080/admin/addtestanswer'
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
							$('.mess').removeClass('success');
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
					Refresh()
				})
		}
		return (
			<form action="" id="testAnserform" noValidate>
				<div className="input-group mb-3">
					<div className="input-group mb-3">
						<input type="text" className="form-control" id="inputTestAnswer" placeholder="Add Test Answer"></input>
						<select required className="form-control" id="selectTestAnswerTheme">
							{courseTag}
						</select>
    					<input type="checkbox" className="form-check-input" id="exampleCheck2"></input>
						<div className="input-group-append">
							<button onClick={Req} className="btn btn-outline-secondary" type="button" id="addTestAnswer">Add Test Answer</button>
						</div>
					</div>
				</div>
			</form>
		)  
	}
}

export default TestAnswer;