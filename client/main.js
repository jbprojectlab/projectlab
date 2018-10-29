import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {Name} from './name'
import {Quote} from './quote'
import {About} from './about'

export default class Main extends Component {
  render () {
    return (
      <div id='main'>
        <Name />
        <Quote />
        <About />
      </div>
    )
  }
}
