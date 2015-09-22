import React from 'react';

class Banner extends React.Component {
	
	static defaultProps = {articles: ['foo', 'bar', 'baz']};

	constructor(props) {
		super(props);
	}

	show() {
		return this.props.articles.map((article,i) => {
			<h1 key="i">article</h1>
		});
	}

	render() {
		return (
			<div className="banner">
				<h3>The sub-title is here</h3>
				<h2>Foo</h2>
				
			</div>
		);
	}
}
export default Banner;