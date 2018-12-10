import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Refresh from './Refresh'

let $ = require("jquery")

let header = new Headers({
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'text/javascript'
});
class Delete extends Component {
	render() {
		const courseTag = this.props.data.course.map((el, i) =>{
			return (<option key={`cd ${i}`} value={el}>{el}</option>)
		})
		const ltheme = this.props.data.ltheme.map((el) => {
			let c = el.lcourse
			let t = el.ltheme
			return (`${c} -- ${t}`)
		})
		const themeTag = ltheme.map((el, i) => {
			return (<option key={`dt ${i}`} value={this.props.data.ltheme[i].ltheme}>{el}</option>)
		})
		const qstTag = this.props.data.qst.map((el, i) =>{
			return (<option key={`qd ${i}`} value={el}>{el}</option>)
		})
		const testTag = this.props.data.test.map((el, i) =>{
			return (<option key={`qtd ${i}`} value={el}>{el}</option>)
		})
		const qstAnswerTag = this.props.data.qstAnswer.map((el, i) =>{
			return (<option key={`qad ${i}`} value={el}>{el}</option>)
		})
		const testAnswerTag = this.props.data.qstAnswer.map((el, i) =>{
			return (<option key={`tad ${i}`} value={el}>{el}</option>)
		})
		function reqDelete (e) {
			const target = e.target.id
			let body = []
			if (target === 'deleteCourse') {
				body[0] = 'courses'
				body[1] = $('#selectDeleteCourse').val()
				body[2] = 'courseName'
			} else if (target === 'deleteTheme'){
				body[0] = 'themes'
				body[1] = $('#selectDeleteTheme').val()
				body[2] = 'theme'
			} else if (target === 'deleteLesson'){
				body[0] = 'lessons'
				body[1] = $('#selectDeleteLesson').val()
				body[2] = 'lesson'
			} else if (target === 'deleteQst'){
				body[0] = 'qst'
				body[1] = $('#selectDeleteQst').val()
				body[2] = 'qst'
			} else if (target === 'deleteTest'){
				body[0] = 'test'
				body[1] = $('#selectDeleteTest').val()
				body[2] = 'test'
			} else if (target === 'deleteQstAnswer'){
				body[0] = 'qstanswers'
				body[1] = $('#selectDeleteQstAnswer').val()
				body[2] = 'qstAnswer'
			} else if (target === 'deleteTestAnswer'){
				body[0] = 'testanswers'
				body[1] = $('#selectDeleteTestAnswer').val()
				body[2] = 'testAnswer'
			}

			
			
			
			let endpoint = 'http://localhost:8080/admin/delete'
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
			<form action="" id="deleteForm" noValidate>
				<div className="input-group mb-3">
						<select required className="form-control" id="selectDeleteCourse">
						{courseTag}	
						</select>
					<div className="input-group-append">
						<button onClick={reqDelete} className="btn btn-outline-secondary" type="button" id="deleteCourse">Delete Course</button>
					</div>
				</div>
				<div className="input-group mb-3">
						<select required className="form-control" id="selectDeleteTheme">
						{themeTag}	
						</select>
					<div className="input-group-append">
						<button onClick={reqDelete} className="btn btn-outline-secondary" type="button" id="deleteTheme">Delete Theme</button>
					</div>
				</div>
				<div className="input-group mb-3">
						<select required className="form-control" id="selectDeleteLesson">
						{themeTag}	
						</select>
					<div className="input-group-append">
						<button onClick={reqDelete} className="btn btn-outline-secondary" type="button" id="deleteLesson">Delete Lessons</button>
					</div>
				</div>
				<div className="input-group mb-3">
						<select required className="form-control" id="selectDeleteQst">
						{qstTag}	
						</select>
					<div className="input-group-append">
						<button onClick={reqDelete} className="btn btn-outline-secondary" type="button" id="deleteQst">Delete Qst</button>
					</div>
				</div>
				<div className="input-group mb-3">
						<select required className="form-control" id="selectDeleteTest">
						{testTag}	
						</select>
					<div className="input-group-append">
						<button onClick={reqDelete} className="btn btn-outline-secondary" type="button" id="deleteTest">Delete Test</button>
					</div>
				</div>
				<div className="input-group mb-3">
						<select required className="form-control" id="selectDeleteQstAnswer">
						{qstAnswerTag}	
						</select>
					<div className="input-group-append">
						<button onClick={reqDelete} className="btn btn-outline-secondary" type="button" id="deleteQstAnswer">Delete Qst Answer</button>
					</div>
				</div>
				<div className="input-group mb-3">
						<select required className="form-control" id="selectDeleteTestAnswer">
						{testAnswerTag}	
						</select>
					<div className="input-group-append">
						<button onClick={reqDelete} className="btn btn-outline-secondary" type="button" id="deleteTestAnswer">Delete Test Answer</button>
					</div>
				</div>
			</form>
		)  
	}
}

export default Delete;