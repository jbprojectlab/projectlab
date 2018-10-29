import React, {Fragment} from 'react'

export const ProjectsHeader = props => {
  return (
    <Fragment>
      <div id='projects-header-container'>
        <div className='projects-header-segments'>
        <svg height="100" width="100">
          <line x1="20" y1="20" x2="130" y2='20' />
        </svg>
      </div>    
        <h2 id='projects-header'>PROJECTS</h2>
        <div className='projects-header-segments'>
          <svg height="100" width="100">
            <line x1="20" y1="20" x2="130" y2='20' />
          </svg>
        </div>  
      </div>  
    </Fragment>
  )
}