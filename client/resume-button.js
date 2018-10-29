import React from 'react'

export const ResumeButton = props => {
  return (
    <div id='resume-button-container'>
      <a id='resume-button' href='/src/james-byrd-resume.pdf'
        download='james-byrd-resume.pdf'>Download My Resume</a>
    </div>
  )
}