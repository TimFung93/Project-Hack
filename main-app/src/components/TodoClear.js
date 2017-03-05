import React from 'react';


export default class TodoClear extends React.Component {

	render() {
		return (
			 <button
			 value={this.props.value}
			 onClick={() => this.props.handleClear()}
			 className="pull-right btn btn-default">
			 Clear Complete
			 </button>
		)
	}
}	