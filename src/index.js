import React from 'react'
import ReactDOM from 'react-dom'
import Registration from './components/Registration'
import Course from './components/Course'
import Theme from './components/Theme'
import Lesson from './components/Lesson'
import Qst from './components/Qst'
import Test from './components/Test'
import ShowLesson from './components/ShowLesson'
import ShowQuest from './components/ShowQuest'
import TestAnswer from './components/TestAnswer'
import QstAnswer from './components/QstAnswer'
import Delete from './components/Delete'
import {Router, Route, Link} from 'react-router-dom'
import createBrowserHistory from "history/createBrowserHistory"
import Greeting from './components/Greeting'
import Testing from './components/Testing'
import Lerning from './components/lerning'
import './preload.css'



const customHistory = createBrowserHistory();
const btns = (
	<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
		<div className="btn-group btn-group-lg" role="group" aria-label="First group">
			<Link to="/admin/add" className="course btn btn-secondary">ADD</Link>
			<Link to="/admin/delete" className="qst btn btn-secondary">DELETE</Link>
			<Link to="/admin/showlesson" className="map btn btn-secondary">SHOW LESSON</Link>
			<Link to="/admin/showqst" className="lesson btn btn-secondary">SHOW QUEST</Link>
		</div>
	</div>);
let header = new Headers({
	'Content-Type': 'application/json',
	'Accept': 'application/json'
})	

let myInit = { method: 'GET',
	   mode: 'cors',
	   header: header,
	}
const endpoint = 'http://localhost:8080/admin/start';

ReactDOM.render(<div id="preloader">
					<div id="loader"></div>
				</div>, 
				document.getElementById('root'));

function getData () {
	fetch(endpoint, myInit)
		.then(res => res.json())
		.then((res) => {
			console.log(`Request to db`)
			let WrapperAdd = () => {
				const add = (
					<div className='container'>
						{btns}
						<br></br>
						<div className='mess'></div>
						<Course />
						<Theme course={res.course} />
						<Lesson course={res.course} data={res.ltheme}/>
						<Qst course={res.course} data={res.ltheme} />
						<Test data={res.ltheme} />
						<QstAnswer qst={res.qst} />
						<TestAnswer test={res.qst} />
					</div>
				)
				return (add)
			}
			let NavBar = () => {
				const nav = (
					<div className='container'>
						{btns}
						<br></br>
					</div>
				)
				return (nav)
			}
			let DeleteWrapper = () => {
				const del = (
					<div className='container'>
						{btns}
						<br></br>
						<div className='mess'></div>
						<Delete data={res} />
					</div>
				)
				return (del)
			}
			let ShowLessonWrapper = () => {
				const sl = (
					<div className='container'>
						{btns}
						<br></br>
						<div className='mess'></div>
						<ShowLesson data={res.ltheme} />
					</div>
				)
				return (sl)
			}
			let ShowQstWrapper = () => {
				const sqst = (
					<div className='container'>
						{btns}
						<br></br>
						<div className='mess'></div>
						<ShowQuest qst={res.qst} test={res.test} />
					</div>
				)
				return (sqst)
			}
			let TestingWrapper = () => {
				return (<Testing  data={res.qstAnswer} />)
			}
			
			ReactDOM.render(<Router history={customHistory}>
				<div>
					<Route path="/admin/showlesson" component={ShowLessonWrapper} />
					<Route path="/admin/showqst" component={ShowQstWrapper} />
					<Route path="/admin/delete" component={DeleteWrapper} />
					<Route exact path="/admin" component={NavBar} />
					<Route exact path="/" component={Registration} />
					<Route path="/admin/Add" component={WrapperAdd} />
					<Route path="/greeting" component={Greeting} />
					<Route path="/test" component={TestingWrapper} />
					<Route path="/lerning" component={Lerning} />
				</div>
			</Router>, document.getElementById('root'));
		})
	
}
getData()



export default getData;