import { hot } from 'react-hot-loader/root'
import React, {Component} from 'react'
import './App.css'
import Todo from '../Todo/Todo.jsx'

const App = (props) => {
  return (
    <div>
      <Todo />
    </div>
  )
}

export default hot(App)