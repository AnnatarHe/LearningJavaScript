import React from 'react';
import RightLinks from './_rightLinks';

class Nav extends React.Component
{
	render() {
		return (
			<div className="">
				<nav className="nav cf">
					<h1 className="left">Hello There</h1>
					<RightLinks />
				</nav>
			</div>
			);
	}
}

export default Nav;