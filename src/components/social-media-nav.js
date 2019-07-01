import React from 'react'
import '../css/social-media-nav.css'

import linkedInLogo from 'img/linkedin.png'
import githubLogo from 'img/github.svg'
import mediumLogo from 'img/medium.png'

export const SocialMediaNav = props => {
  return (
    <div id='social-media-nav'>
      <a href='https://www.linkedin.com/in/james-s-byrd/'>
        <img id='linkedin-icon' className='social-media-icon' src={linkedInLogo}></img>
      </a>
      <a href='https://github.com/jbprojectlab'>
        <img id='github-icon' className='social-media-icon' src={githubLogo}></img>
      </a>
      <a href='https://medium.com/@jbprojectlab'>
        <img id='medium-icon' className='social-media-icon' src={mediumLogo}></img>
      </a>      
    </div>
  )
}