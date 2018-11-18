import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class NavButton extends Component {
	render() {
		

		return (
		<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
			<div className="btn-group mr-2" role="group" aria-label="First group">
				<button type="button" className="btn btn-secondary active">qst</button>
				<button type="button" className="btn btn-secondary">2</button>
				<button type="button" className="btn btn-secondary">3</button>
				<button type="button" className="btn btn-secondary">4</button>
			</div>
		</div>
		)  
	}
}

export default NavButton;