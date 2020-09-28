import React from 'react';
import './components/Todo.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'



const listItems = [{
  name: 'Test Item',
  id: 1,
  completed: false,
}]

class App extends React.Component {
// you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      listItems
    };
  }
  // this component is going to take care of state, and any change handlers you need to work with your state

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      listItems: [...this.state.listItems, newItem]
    })
  }

  toggleComplete = (itemId) => {
    console.log(itemId)
    this.setState({
      listItems: this.state.listItems.map((item) => {
        if(itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      listItems: this.state.listItems.filter((item) => !item.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
        <TodoList 
        listItems={this.state.listItems} 
        toggleCompleted={this.toggleComplete}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
