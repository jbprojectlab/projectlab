import React from 'react'
import css from './social-media-nav.css'

export const SocialMediaNav = props => {
  return (
    <div id='social-media-nav'>
      <a href='https://www.linkedin.com/in/james-s-byrd/'>
        <img id='linkedin-icon' className='social-media-icon' src='/src/linkedin.png'></img>
      </a>
      <a href='https://github.com/jbprojectlab'>
        <img id='github-icon' className='social-media-icon' src='/src/github.svg'></img>
      </a>
      <a href='https://medium.com/@jbprojectlab'>
        <img id='medium-icon' className='social-media-icon' src='src/medium.png'></img>
      </a>      
    </div>
  )
}