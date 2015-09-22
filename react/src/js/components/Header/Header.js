import React from 'react';
import Nav from './nav';
import Banner from './banner';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<Nav />
				<Banner />
			</div>
		);
	}
}
export default Header;