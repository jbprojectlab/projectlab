import React, {Fragment} from 'react'
import css from './email.css'

export const Email = props => {
  return (
    <Fragment>
      <div id='email-container'>  
        <a id='email-button' href='mailto:jamesbyrd.dev@gmail.com'>
          <i id='envelope-icon' className="fa fa-envelope-o"></i>
        </a>
        <a id='email-address' href='mailto:jamesbyrd.dev@gmail.com'>
          jamesbyrd.dev@gmail.com</a>
      </div>  
    </Fragment>
  )
}
