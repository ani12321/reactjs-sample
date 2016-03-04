var React = require('react');
var ReactDOM = require('react-dom');
var Comment = require('./comment.js');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello world!</h1>
				<Comment />
			</div>
		);
	}

});

ReactDOM.render(<App />, document.getElementById("main") );
