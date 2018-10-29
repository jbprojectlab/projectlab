import React, {Fragment} from 'react'

export const ContactHeader = props => {
  return (
    <Fragment>
      <div id='contact-header-container'>  
        <h2 id='contact-header'>CONTACT ME</h2>
        <div className='contact-header-segments'>
          <svg id='contact-bottom-segment' height="100" width="100">
            <line x1="20" y1="20" x2="130" y2='20' />
          </svg>
        </div>  
      </div>  
    </Fragment>
  )
}