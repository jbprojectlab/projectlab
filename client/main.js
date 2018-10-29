import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {Name} from './name'
import {Quote} from './quote'
import {About} from './about'
import {ProjectsHeader} from './projects-header'
import {Projects} from './projects'
import {Info} from './info'
import {SocialMediaNav} from './social-media-nav'
import {Copyright} from './copyright'

export default class Main extends Component {
  render () {
    return (
      <div id='main'>
        <Name />
        <Quote />
        <About />
        <ProjectsHeader />
        <Projects />
        <Info />
        <SocialMediaNav />
        <Copyright />
      </div>
    )
  }
}
