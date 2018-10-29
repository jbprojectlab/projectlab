import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {NavBar} from './navbar'

export default class Main extends Component {
  render () {
    return (
      <div id='main'>
        <NavBar />
      </div>
    )
  }
}
