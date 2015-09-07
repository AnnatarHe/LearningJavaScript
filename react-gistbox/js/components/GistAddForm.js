var GistAddForm = React.createClass({

	getInitialState: function() {
		return {
			username:''
		};
	},

	onChange: function(e) {
		this.setState({ username:e.target.value });
	},

	addGist: function(e) {
		e.preventDefault();

		this.props.onAdd(this.state.username);
		this.setState({ username: '' });
	},

	render: function() {
		return (
			<div>
				<form className="form-inline" onSubmit={this.addGist}>
					<input value={this.state.username} placeholder="Github 账户名，如：AnnatarHe" className="input" onChange={this.onChange} />
					<button className="button" onClick={this.ajaxGo} >Fetch latest gist</button>
				</form>
			</div>
			);
	}
});