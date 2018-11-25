import React from 'react'
function Alert (data) {
	let message;
	if (data.statusEror) {
		message = (<div className='errMessage'>{data.message}</div>)

	}
	else {
		message = (<div className='sucsessMessage'>{data.message}</div>)
	}
	console.log(message)
	return (message)
}

export default Alert;