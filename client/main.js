import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {Name} from './name/name'
import {Quote} from './quote/quote'
import {About} from './about/about'
import {ProjectsHeader} from './projects/projects-header'
import {Projects} from './projects/projects'
import {Contact} from './contact/contact'
import {SocialMediaNav} from './social-media-nav/social-media-nav'
import {Copyright} from './copyright/copyright'

const Main = () => {
  return (
    <div id='main'>
      <Name />
      <Quote />
      <About />
      <ProjectsHeader />
      <Projects />
      <Contact />
      <SocialMediaNav />
      <Copyright />
    </div>
  )
}

export default Main