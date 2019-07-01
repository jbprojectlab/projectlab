import React from 'react'

import resume from '../docs/james-byrd-resume.pdf'

export const ResumeButton = props => {
  return (
    <div id='resume-button-container'>
      <a id='resume-button' href={resume}
        download='james-byrd-resume.pdf'>Download My Resume</a>
    </div>
  )
}