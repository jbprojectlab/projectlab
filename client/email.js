import React, {Fragment} from 'react'

export const Email = props => {
  return (
    <Fragment>
      <div id='email-container'>  
        <button id='email-button'>
          <i id='envelope-icon' className="fa fa-envelope-o"></i>
        </button>
        <h4 id='email-address'>james@jbprojectlab.com</h4>
      </div>  
    </Fragment>
  )
}
