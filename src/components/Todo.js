// `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.

import React from 'react'

const Todo = (props) => {
    return(
        <div 
        className={`item${props.item.completed ? " completed" : ""}`}
        onClick={() => props.toggleCompleted(props.item.id)}>
            <h2>{props.item.name}</h2>
        </div>
    )
}

export default Todo;
