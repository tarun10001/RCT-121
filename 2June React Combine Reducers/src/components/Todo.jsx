import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import "../App.css"


const Todo = () => {

  return (
    <div className="todo">
      <h3>Todo</h3>
      <TodoInput />
      <TodoList />
    </div>

  )
}

export default Todo;