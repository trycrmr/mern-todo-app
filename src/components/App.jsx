import { hot } from 'react-hot-loader/root'
import React, {Component} from 'react'
import './App.css'
import AddTodoForm from '../AddTodoForm/AddTodoForm.jsx'
import TodoList from '../TodoList/TodoList.jsx'

const App = (props) => {
  return (
    <div>
      <p>My Todo App is great. It's the best Todo App. Ask anyone. They'll tell you. It's the greatest.</p>
      <AddTodoForm />
      <TodoList />
    </div>
  )
}

export default hot(App)