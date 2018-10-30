import React, {Fragment} from 'react'
import Popup from 'reactjs-popup'

export const Projects = props => {
  return (
    <Fragment>
      <div id='project-container'>
        <Popup
          trigger={
            <button id='jamspace' className='project-list'>
              <h2 className='project-title'>JAMSPACE.TV</h2>
            </button>
          }modal>
          {close => (
            <div id='jamspace-modal' className='project-modal'>
              <div id='jamspace-description' className='project-description'>
                <a className="close" onClick={close}>&times;</a>
                <h3 id='jamspace-description-header' className='project-description-header'>
                  JAMSPACE.TV
                </h3>
                <p id='jamspace-description-text' className='project-description-text'>
                  JamSpaceTV is a live video-streaming application designed for musicians, by musicians.
                  They will now have a space to share their music with the world, while interacting with
                  an audience in real-time, whether that be through live performance, lessons, or in the
                  studio. While other streaming applications already exist, their music sections tend to
                  be buried below other mediums. On JamSpaceTV, we seek to create a culture where music
                  is front and center, as are the people who make it.
                </p>
                <div id='jamspace-description-links' className='project-description-links'>
                  <div id='jamspace-url-container' className='project-url-container'>
                    <a id='jamspace-url' className='project-url' href='http://www.jamspace.tv'>jamspace.tv</a>
                  </div>
                  <div id='jamspace-description-icons' className='project-description-icons'>
                    <a id='jamspace-youtube' className='project-youtube' href='https://www.youtube.com/watch?v=qcCDYTLqq5w&amp=&index=14&amp=&t=0s'>
                      <img id='jamspace-youtube-icon' className='youtube-icon'
                        src='https://basejump.co.uk/wp-content/uploads/2016/03/youtube-logo.png'>
                      </img>
                    </a>
                    <a id='jamspace-github' className='project-github' href='https://github.com/Fullstack-JamSpace/JamSpaceTV'>
                      <img id='jamspace-github-icon' src='https://jriccardi.com/github-icon.svg'></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Popup>
        <Popup
          trigger={
            <button id='steppr' className='project-list'>
              <h2 className='project-title'>steppr.io</h2>
            </button>
          }modal>
          {close => (
            <div id='steppr-modal' className='project-modal'>
              <div id='steppr-description' className='project-description'>
                <a id='steppr-modal-close' className="close" onClick={close}>&times;</a>
                <h3 id='steppr-description-header' className='project-description-header'>
                  steppr.io
                </h3>
                <p id='steppr-description-text' className='project-description-text'>
                  stepprio is a
                </p>
                <div id='steppr-description-links' className='project-description-links'>
                  <div id='steppr-url-container' className='project-url-container'>
                    <a id='steppr-url' className='project-url' href='http://www.steppr.io'>steppr.io</a>
                  </div>
                  <div id='steppr-description-icons' className='project-description-icons'>
                    <a id='steppr-github' className='project-github' href='https://github.com/james-byrd/steppr.io'>
                      <img id='steppr-github-icon' src='https://jriccardi.com/github-icon.svg'></img>
                    </a>
                    <a id='steppr-youtube' className='project-youtube' href='https://www.youtube.com/watch?v=bvj3dOitsOE&amp=&feature=youtu.be'>
                      <img id='steppr-youtube-icon' className='youtube-icon'
                        src='https://basejump.co.uk/wp-content/uploads/2016/03/youtube-logo.png'>
                      </img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Popup>
        <Popup
          trigger={
            <button id='sockr' className='project-list'>
              <h2 className='project-title'>Sockr</h2>
            </button>
          }modal>
          {close => (
            <div id='sockr-modal' className='project-modal'>
              <div id='sockr-description' className='project-description'>
                <a className="close" onClick={close}>&times;</a>
                <h3 id='sockr-description-header' className='project-description-header'>
                  Sockr
                </h3>
                <p id='sockr-description-text' className='project-description-text'>
                  Sockr is a 
                </p>
                <div id='sockr-description-links' className='project-description-links'>
                  <div id='sockr-url-container' className='project-url-container'>
                    <a id='sockr-url' className='project-url' href='https://sockr.herokuapp.com'>Sockr</a>
                  </div>
                  <div id='sockr-description-icons' className='project-description-icons'>
                    <a id='sockr-github' className='project-github' href='https://github.com/Fullstack-GraceShopper/GraceShopper'>
                      <img id='sockr-github-icon' src='https://jriccardi.com/github-icon.svg'></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Popup>
      </div>      
    </Fragment>
  )
}

// href='http://www.jamspace.tv'
// href='http://www.steppr.io'
// href='https://sockr.herokuapp.com'