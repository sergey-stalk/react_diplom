

let header = new Headers({
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'application/json'
});

function Request (col, course, theme) {
	let endpoint = 'http://localhost:8080/admin/addcourse';
	let myInit = { method: 'POST',
               mode: 'cors',
			   header: {header},
			   body: course
			};
	if(col === 'course') {
		endpoint = 'http://localhost:8080/admin/addcourse';
		
	}
	if(col === 'course') {
		endpoint = 'http://localhost:8080/admin/addtheme';
		
	}
	fetch(endpoint, myInit)
		.then(res => res.json())
		.then((res) => {
			console.log(res.message)
		}) 
}


export default Request;