import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
let $ = require("jquery")


let header = new Headers({
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'text/javascript'
});

class ShowQuest extends Component {
	render () {
		const qst = this.props.qst.map((el, i) => {
			return (<option key={`lts ${i}`} value={el}>{el}</option>)
		})
		const test = this.props.qst.map((el, i) => {
			return (<option key={`lts ${i}`} value={el}>{el}</option>)
		})
		

		function Req () {
			let qst = $('#showQst').val()
			let body = [qst]
			let endpoint = 'http://localhost:8080/admin/showquest'
				let myInit = { method: 'POST',
					   mode: 'cors',
					   header: {header},
					   body: body
					};
			console.log(body)
			fetch(endpoint, myInit)
				.then(res => res.json())
				.then((res) => {
					console.log(res)
					if (res.statusEror) {
						$('.mess').text(res.message)
						$('.mess').removeClass('success').addClass('err')
						setTimeout(()=>{
							$('.mess').removeClass('err');
							$('.mess').text('');
						}, 2000)
					} else {
						let qstAns =[];
						for (let i = 0; i < res.length; i++) {
							qstAns[i] = `${res[i].qstAnswer}  ---  Правильность: ${res[i].rqst}` 
						}
						
						$("#showQuestArea").text(qstAns.join('\n'))
					}
				})
		}
		function Reg () {
			let qst = $('#showTest').val()
			let body = [qst]
			let endpoint = 'http://localhost:8080/admin/showquest'
				let myInit = { method: 'POST',
					   mode: 'cors',
					   header: {header},
					   body: body
					};
			console.log(body)
			fetch(endpoint, myInit)
				.then(res => res.json())
				.then((res) => {
					console.log(res)
					if (res.statusEror) {
						$('.mess').text(res.message)
						$('.mess').removeClass('success').addClass('err')
						setTimeout(()=>{
							$('.mess').removeClass('err');
							$('.mess').text('');
						}, 2000)
					} else {
						let qstAns =[];
						for (let i = 0; i < res.length; i++) {
							qstAns[i] = `${res[i].qstAnswer}  ---  Правильность: ${res[i].rtest}` 
						}
						
						$("#showQuestArea").text(qstAns.join('\n'))
					}
				})
		}
		return (
				<div className={'container'}>
					<form action="" id="themeform" noValidate>
						<div className="input-group mb-3">
							<select required className="form-control" id="showQst">
							{qst}
							</select>
							<div className="input-group-append">
								<button onClick={Req} className="btn btn-outline-secondary" type="button" id="showSelectQst">Show Quest</button>
							</div>
							<select required className="form-control" id="showTest">
							{test}
							</select>
							<div className="input-group-append">
								<button onClick={Reg} className="btn btn-outline-secondary" type="button" id="showSelectTest">Show Test</button>
							</div>
						</div>
					</form>
					<div id="showQuestArea">

					</div>
				</div>
				
		)
	}
}
export default ShowQuest;