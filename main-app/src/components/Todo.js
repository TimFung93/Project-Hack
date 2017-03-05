import React from 'react';


export default class Todo extends React.Component {
	render () {
		return(
		<li className={"list-group-item " + (this.props.done ? 'done' : null)} >
            <input type="checkbox"
            checked={this.props.done}
            value="on" 
            onClick={ () => {this.props.clickTodo(this.props.index)}}
             />
         
            <label>{this.props.text}</label>
        </li>
        )
	}
}



