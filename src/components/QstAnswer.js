import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Refresh from './Refresh'

let $ = require("jquery")

let header = new Headers({
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'text/javascript'
});


class QstAnswer extends Component {
	render() {
		const courseTag = this.props.qst.map((el, i) => {
			return (<option key={`qa ${i}`} value={el}>{el}</option>)
		})

		function Req () {
			let answer = $('#inputQstAnswer').val()
			let qst = $('#selectQstAnswerTheme').val()
			console.log($('#exampleCheck1').is(':checked'))
			let right
			if ($('#exampleCheck1').is(':checked')) {
				right = '1'
			} else {
				right = '0'
			}

			let body = [qst,answer,right]
			let endpoint = 'http://localhost:8080/admin/addqstanswer'
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
			<form action="" id="qstAnserform" noValidate>
				<div className="input-group mb-3">
					<div className="input-group mb-3">
						<input type="text" className="form-control" id="inputQstAnswer" placeholder="Add Qst Answer"></input>
						<select required className="form-control" id="selectQstAnswerTheme">
							{courseTag}
						</select>
    					<input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
						<div className="input-group-append">
							<button onClick={Req} className="btn btn-outline-secondary" type="button" id="addQstAnswer">Add Qst Answer</button>
						</div>
					</div>
				</div>
			</form>
		)  
	}
}

export default QstAnswer;