import React from 'react';
import Header from './components/Header/Header';

class App extends React.Component
{
	render() {
		return (
			<div>
				<Header />
			</div>
			);
	}
}

React.render(<App />, document.body);