import React from 'react';

class RightLinks extends React.Component
{
	render() {
		return (
			<div>
				<ul className="unstyled right-links right">
					<li>
						<a href="#">Agents</a>
					</li>
					<li>
						<a href="#">Login</a>
					</li>
					<li>
						<a href="#">Sign up</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default RightLinks;