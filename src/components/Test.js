import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Refresh from './Refresh'
let $ = require("jquery")


let header = new Headers({
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'text/javascript'
});
class Test extends Component {
	render() {
		const ltheme = this.props.data.map((el) => {
			let c = el.lcourse
			let t = el.ltheme
			return (`${c} -- ${t}`)
		})
		const courseTag = ltheme.map((el, i) => {
			return (<option key={`tt ${i}`} value={this.props.data[i].ltheme}>{el}</option>)
		})

		function Req () {
			let test = $('#inputTest').val()
			let theme = $('#selectTestTheme').val()
			let body = [theme, test]
			let endpoint = 'http://localhost:8080/admin/addtest'
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
			<form action="" id="testform" noValidate>
				<div className="input-group mb-3">
					<div className="input-group mb-3">
						<input type="text" className="form-control" id="inputTest" placeholder="Add Test"></input>
						<select required className="form-control" id="selectTestTheme">
							{courseTag}
						</select>
						<div className="input-group-append">
							<button onClick={Req} className="btn btn-outline-secondary" type="button" id="addTest">Add Test</button>
						</div>
					</div>
				</div>
			</form>
		)  
	}
}

export default Test;