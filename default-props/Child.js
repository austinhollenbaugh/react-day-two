import React from "react";

var Child = React.createClass({
	getDefaultProps() {
		return {
			name: "Dan"	
		}	
	},
	render() {
		return (
			<div>
				{this.props.name}	
			</div>
		)
	}
});

export default Child;
