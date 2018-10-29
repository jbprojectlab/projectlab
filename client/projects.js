import React, {Fragment} from 'react'

export const Projects = props => {
  return (
    <Fragment>
      <div id='project-container'>
        <a id='jamspace' className='project-list' href='http://www.jamspace.tv'>
          <h2 className='project-title'>JAMSPACE.TV</h2>
        </a>
        <a id='steppr' className='project-list' href='http://www.steppr.io'>
          <h2 className='project-title'>steppr.io</h2>
        </a>
        <a id='sockr' className='project-list' href='https://sockr.herokuapp.com'>
          <h2 className='project-title'>Sockr</h2>
        </a>
      </div>      
    </Fragment>
  )
}