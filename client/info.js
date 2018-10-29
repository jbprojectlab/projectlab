import React, {Fragment} from 'react'
import {ResumeButton} from './resume-button'
import {ContactHeader} from './contact-header'
import {Email} from './email'

export const Info = props => {
  return (
    <Fragment>
      <div className='info-segments'>
        <svg id='button-top-segment' height='100' width='100'>
          <line x1='20' y1='20' x2='130' y2='20' />
        </svg>
        <ResumeButton id='resume-button'/>
        <svg id='button-bottom-segment' height='100' width='100'>
          <line x1='20' y1='20' x2='130' y2='20' />
        </svg>
        <ContactHeader />
        <Email />
      </div>        
    </Fragment>
  )
}