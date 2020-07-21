const React = require('react')
// const DefaultLayout = require('./layouts/default')
import DefaultLayout from './layouts/default'

const HelloMessage = (props) => {
  return (
    <DefaultLayout>
      <h1>Hello {props.name}</h1>
    </DefaultLayout>
  )
}

module.exports = HelloMessage;