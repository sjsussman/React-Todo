// `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from 'react'

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state= {
            item: ''
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitItem = e => {
        e.preventDefault();
        this.setState({ item: '' });
        this.props.addItem(e, this.state.item)
    };

    clearItems = e => {
        e.preventDefault();
        this.setState({ item: '' });
        this.props.clearAll(e)
    };

    render() {
        return(
            <div>
            <form onSubmit={this.submitItem}>
                <input 
                name='item'
                value={this.state.item}
                type='text'
                onChange = {this.onChange}
                /> <br />
                <button>Add Item</button> <br />
            </form>
            <button onClick={this.clearItems}>Start New List</button> <br />
            </div>
        )
    }
}

export default TodoForm;