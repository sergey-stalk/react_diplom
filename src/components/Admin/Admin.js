import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from './Course'
import Theme from './Theme'
import SubTheme from './SubTheme'
import Qst from './Qst'
import Test from './Test'
import Lesson from './Lesson'
let $ = require("jquery");



class Admin extends Component {
	constructor(props) {
		super(props);

		this.state = {state: 'course'}
		this.course = this.course.bind(this)
		this.qst = this.qst.bind(this)
		this.map = this.map.bind(this)
		this.stud = this.stud.bind(this) 
		this.lesson = this.lesson.bind(this) 
	}
	course(){
		this.setState(prevState => ({
			state: 'course'
		}))
	} 
	qst(){
		this.setState(prevState => ({
			state: 'qst'
		}))
	} 
	map(){
		this.setState(prevState => ({
			state: 'map'
		}))
	} 
	stud(){
		this.setState(prevState => ({
			state: 'stud'
		}))
	}
	lesson(){
		this.setState(prevState => ({
			state: 'lesson'
		}))
	} 


	render() {
		const value = this.state.state; 
		const btns = (
						<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
							<div className="btn-group btn-group-lg" role="group" aria-label="First group">
								<button onClick={this.course} type="button" className="course btn btn-secondary active">course</button>
								<button onClick={this.qst} type="button" className="qst btn btn-secondary">qst</button>
								<button onClick={this.lesson} type="button" className="lesson btn btn-secondary">lesson</button>
								<button onClick={this.map} type="button" className="map btn btn-secondary">map</button>
								<button onClick={this.stud} type="button" className="stud btn btn-secondary">stud</button>
							</div>
						</div>);
		let content = (
						<div className='container'>
							{btns}
							<br></br>
							<Course />
							<Theme />
							<SubTheme />
						</div>);
		
	 	if (value === 'course') {
			$('.active').toggleClass("active");
			$('.course').toggleClass("active");
			console.log('course');
		}
		if (value === 'qst') {
			$('.active').toggleClass("active");
			$('.qst').toggleClass("active");

			content = (
				<div className='container'>
					{btns}
					<br></br>
					<Qst />
					<Test />
				</div>);

			console.log('qst');
		} 
		if (value === 'map') {
			$('.active').toggleClass("active");
			$('.map').toggleClass("active");
			console.log('map');
		} 
		if (value === 'stud') {
			$('.active').toggleClass("active");
			$('.stud').toggleClass("active");
			console.log('stud');
		}
		if (value === 'lesson') {
			$('.active').toggleClass("active");
			$('.lesson').toggleClass("active");
			content = (
				<div className='container'>
					{btns}
					<br></br>
					<Lesson />
				</div>);
			console.log('lesson');
		} 

		return (content)  
	}
}

export default Admin;