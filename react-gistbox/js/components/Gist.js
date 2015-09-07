var Gist = React.createClass({

	render: function() {
		return (
			<div className="gist-item">
				{this.props.username}'s last Gist is <a href={this.props.url}>here</a>.
			</div>
			);
	}

});