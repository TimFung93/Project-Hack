import React from 'react';


export default class TodoSelect extends React.Component {
	render() {
		return (
			 <select onChange={e => this.props.onSelectChange(e)}
			 		value={this.props.selectValue}
			 >
				        <option value="all">all</option>
				        <option value="active">active</option>
				        <option value="complete">complete</option>
				    </select>
		)
	}
}