// `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

import React from 'react'
import Todo from './Todo' 

const TodoList = (props) => {

    return(
        <div>
            {props.listItems.map(item =>(
                <Todo key={item.id} item={item} toggleCompleted={props.toggleCompleted}/>
            ))}
            <button onClick={props.clearCompleted}>Clear Completed Tasks</button>
        </div>
    )
}

export default TodoList;