import React from 'react';


export default class TodoForm extends React.Component {
    render() {
        return (
                    <form onSubmit={event => {this.props.handleSubmit(event)}} >
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button className="btn btn-primary" type="submit">Add</button>
                            </span>
                            <input className="form-control" 
                                placeholder="add a todo" 
                                onChange={event => {this.props.inputChange(event)}}
                                value={this.props.value}
                            />
                        </div>
                   </form>
        )
    }
}