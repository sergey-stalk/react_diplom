import React from 'react'
import ReactDOM from 'react-dom'
import Admin from './components/Admin'

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
		.then()
		.then((res) => {
			console.log(`Request to db`)
			
			ReactDOM.render(<Admin data={res} />, document.getElementById('root'));
		})
	
}
getData()
setInterval(getData, 7000)


