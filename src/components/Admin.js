import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Course from './Course'
import Theme from './Theme'
import Qst from './Qst'
import Test from './Test'
import Lesson from './Lesson'
import ShowLesson from './ShowLesson'
import QstAnswer from './QstAnswer'
import TestAnswer from './TestAnswer'
import ShowQuest from './ShowQuest'
import Delete from './Delete'

let $ = require("jquery")



class Admin extends Component {
	constructor(props) {
		super(props);

		this.state = {state: ''}
		this.ADD = this.ADD.bind(this)
		this.DELETE = this.DELETE.bind(this)
		this.ShowLesson = this.ShowLesson.bind(this)
		this.ShowQuest = this.ShowQuest.bind(this) 
		this.lesson = this.lesson.bind(this) 
		
	}
	ADD(){
		this.setState(() => ({
			state: 'ADD'
		}))
	} 
	DELETE(){
		this.setState(() => ({
			state: 'DELETE'
		}))
	} 
	ShowLesson(){
		this.setState(() => ({
			state: 'ShowLesson'
		}))
	} 
	ShowQuest(){
		this.setState(() => ({
			state: 'ShowQuest'
		}))
	}
	lesson(){
		this.setState(() => ({
			state: 'lesson'
		}))
	}
	delete(){
		this.setState(() => ({
			state: 'delete'
		}))
	}
	
	render() {
		const value = this.state.state; 
		const btns = (
						<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
							<div className="btn-group btn-group-lg" role="group" aria-label="First group">
								<button onClick={this.ADD} type="button" className="course btn btn-secondary active">ADD</button>
								<button onClick={this.DELETE} type="button" className="qst btn btn-secondary">DELETE</button>
								<button onClick={this.ShowLesson} type="button" className="map btn btn-secondary">SHOW LESSON</button>
								<button onClick={this.ShowQuest} type="button" className="lesson btn btn-secondary">SHOW QUEST</button>
								<button onClick={this.delete} type="button" className="stud btn btn-secondary" disabled>delete</button>
								<button disabled onClick={this.stud} type="button" className="stud btn btn-secondary">stud</button>
							</div>
						</div>);


		let content = (
			<div className='container'>
				{btns}
				<br></br>
				<div className='mess'></div>
				<Course />
				<Theme course={this.props.data.course} />
				<Lesson course={this.props.data.course} data={this.props.data.ltheme}/>
				<Qst course={this.props.data.course} data={this.props.data.ltheme} />
				<Test data={this.props.data.ltheme} />
				<QstAnswer qst={this.props.data.qst} />
				<TestAnswer test={this.props.data.test} />
			</div>);
		
		

	 	if (value === 'ADD') {
			$('.active').toggleClass("active");
			$('.course').toggleClass("active");
		}
		if (value === 'DELETE') {
			$('.active').toggleClass("active");
			$('.qst').toggleClass("active");

			content = (
				<div className='container'>
					{btns}
					<br></br>
					<div className='mess'></div>
					<Delete data={this.props.data} />
					
				</div>);
		} 
		if (value === 'ShowLesson') {
			$('.active').toggleClass("active");
			$('.map').toggleClass("active");

			content = (
				<div className='container'>
					{btns}
					<br></br>
					<div className='mess'></div>
					<ShowLesson data={this.props.data.ltheme} />
				</div>);
		} 
		if (value === 'ShowQuest') {
			$('.active').toggleClass("active");
			$('.lesson').toggleClass("active");
			content = (
				<div className='container'>
					{btns}
					<br></br>
					<div className='mess'></div>
					<ShowQuest qst={this.props.data.qst} test={this.props.data.test} />
				</div>);
		} 
		
		if (value === 'stud') {
			$('.active').toggleClass("active");
			$('.stud').toggleClass("active");
			console.log('stud');
		}
		return (content)
	}
}

export default Admin;