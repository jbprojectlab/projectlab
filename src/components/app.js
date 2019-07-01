import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {Name} from './name'
import {Quote} from './quote'
import {About} from './about'
import {ProjectsHeader} from './projects-header'
import {Projects} from './projects'
import {Contact} from './contact'
import {SocialMediaNav} from './social-media-nav'
import {Copyright} from './copyright'
import '../css/app.css'

const App = () => {
  return (
    <div>
      <Name />
      <Quote />
      <ProjectsHeader />
      <Projects />
      <Contact />
      <SocialMediaNav />
      <Copyright />
    </div>
  )
}

export default App