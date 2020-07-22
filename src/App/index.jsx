import { hot } from 'react-hot-loader/root'
import React, {Component} from 'react'
import './App.css'
import Todo from '../Todo/index'

// const App = (props) => {
//   return (
//     <div>
//       <h1>Hello {props.name}</h1>
//       <Todo />
//     </div>
//   )
// }

class App extends Component {
  constructor(props) {
    super(props)
  }
  render(props) {
    return (
      <div>
        <h1>Hello Bro</h1>
        <Todo />
      </div>
    )
  }
}

export default hot(App)