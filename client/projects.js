import React, {Fragment} from 'react'

export const Projects = props => {
  return (
    <Fragment>
      <div id='project-container'>
        <a id='jamspace' class='project-list' href='http://www.jamspace.tv'>JAMSPACE.TV</a>
        <a id='steppr' class='project-list' href='http://www.steppr.io'>steppr.io</a>
        <a id='sockr' class='project-list' href='https://sockr.herokuapp.com'>Sockr</a>
      </div>      
    </Fragment>
  )
}