var GistBox = React.createClass({
    
    componentWillMount: function() {
    $(document).ajaxStart(function(){
    
    }.bind(this));
    },

	getInitialState: function() {
		return {
			gists: [],
            ing: true
		};
	},

	addGist: function(username) {
		var url = `http://api.github.com/users/${username}/gists`;

		$.get(url,function(result) {
			var username = result[0].owner.login;
			var url = result[0].html_url;

			var gists = this.state.gists.concat({ username, url });

			this.setState({ gists });
		}.bind(this));
	},

	render: function() {
		var newGist = function(gist) {
			return <Gist username={gist.username} url={gist.url} />
		}
		return (
			<div className="container">
				<h1 className="title">Gist box</h1>
                <AlertHere />
                <div className="content">
				    <GistAddForm ing={this.state.ing} onAdd={this.addGist} />
				    { this.state.gists.map(newGist) }
                </div>
			</div>
		)
	}
});

React.render(<GistBox />,document.querySelector('#app'));