import React from 'react';

import Todo from '../components/Todo';
import TodoClear from '../components/TodoClear';
import TodoForm from '../components/TodoForm';
import TodoSelect from '../components/TodoSelect';

import {Link} from 'react-router'



export default class App extends React.Component {
constructor(){
        super();
        this.state = {
            todos: localStorage.todos ? JSON.parse(localStorage.todos) : [],
            value: '',
            idTracker: 5,
            selectValue:'all'
           
        }
        this.clickTodo = this.clickTodo.bind(this)
        this.inputChange = this.inputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onSelectChange = this.onSelectChange.bind(this)
        this.handleClear = this.handleClear.bind(this)

    }

    clickTodo(index) {
        console.log(index)
        let _todo = this.state.todos
        _todo[index].done = !_todo[index].done;
        this.setState({
            todos: _todo
        })
    }

    inputChange(event) {
        console.log(event.target.value)
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        let newTodo = {text: this.state.value, done: false, id: id}
        let id = this.state.idTracker + 1
        let _todos = this.state.todos
        _todos.push(newTodo);

        this.setState({
            todos: _todos,
            idTracker: id
        })

    }

    onSelectChange(event) {
            this.setState({
                selectValue: event.target.value
            })
        }

    handleClear() {
        this.setState({
            todos:  this.state.todos.filter((todo, index) =>{
                        return todo.done === false
                    })
        })
    }

        
      componentDidUpdate() {
        localStorage.todos = JSON.stringify(this.state.todos);
    }



    render(){

        let filteredArray=this.state.todos.filter((todo, index) =>{
            if (this.state.selectValue === 'all') {
                return true
            } else if (this.state.selectValue === 'active') {
                return todo.done === false
            } else if (this.state.selectValue === 'complete'){
                return todo.done === true
            }
        }).map((todo,index) => {
                            return <Todo 
                                    key={index}
                                    text={todo.text}
                                    done={todo.done}
                                    clickTodo={this.clickTodo}
                                    index={index}
                                    
                                    />
                            })
        let title = "Title"

    return(

            <div className="container todomargin">
        
                <h1 className="text-center">To-Do</h1>
                <TodoForm 
                    inputChange={this.inputChange}
                    handleSubmit={this.handleSubmit}
                    value={this.state.value}
                />
                    
                    <ul className="list-group">
                        {filteredArray}
                        <TodoSelect 
                            onSelectChange={this.onSelectChange}
                            selectValue={this.state.selectValue}
                        />
                    </ul>
                    
                   
                 <TodoClear
                    handleClear={this.handleClear} 
                    value={this.value}
                 />


            </div>
        )
    }
}






















