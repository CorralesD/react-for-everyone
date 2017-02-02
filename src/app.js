import React from 'react';
import ContactsList from './ContactsList';
import {render} from 'react-dom';

let contacts = {
	name: 'Diego',
	phone: '*** *** ****'
}

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Contacts List</h1>
				<ContactsList contacts={this.props.contacts}/>
			</div>
		)
	}
}

render(<App contacts={contacts} />, document.getElementById('app'));