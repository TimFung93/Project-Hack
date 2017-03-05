import React from 'react';


export default class TodoSelect extends React.Component {

	render() {
		let style = {
			color: 'black'
		}
		return (
			 <select style={style} onChange={e => this.props.onSelectChange(e)}
			 		value={this.props.selectValue}
			 >
				        <option value="all">all</option>
				        <option value="active">active</option>
				        <option value="complete">complete</option>
				    </select>
		)
	}
}