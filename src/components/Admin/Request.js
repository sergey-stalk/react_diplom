let header = new Headers({
   /*  'Access-Control-Allow-Origin':'*', */
    'Content-Type': 'application/json',
    'Accept': 'application/json'
});

let myInit = { method: 'GET',
               mode: 'cors',
			   header: header, 
			};

const endpoint = 'http://localhost:8080/admin';

function Request () {
	fetch(endpoint, myInit)
		.then(res => res.json())
		.then((res) => {
			  console.log(res);
		})
}


export default Request;