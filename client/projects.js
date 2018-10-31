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
                <h3 className='project-description-header'>
                  JAMSPACE.TV
                </h3>
                <p className='project-description-text'>
                  JamSpaceTV is a live video-streaming application designed for musicians, by musicians.
                  They will now have a space to share their music with the world, while interacting with
                  an audience in real-time, whether that be through live performance, lessons, or in the
                  studio. While other streaming applications already exist, their music sections tend to
                  be buried below other mediums. On JamSpaceTV, we seek to create a culture where music
                  is front and center, as are the people who make it.
                </p>
                <div className='project-description-links'>
                  <div id='jamspace-url-container' className='project-url-container'>
                    <a  className='project-url' href='http://www.jamspace.tv'>jamspace.tv</a>
                  </div>
                  <div className='project-description-icons'>
                    <a className='project-youtube' href='https://www.youtube.com/watch?v=qcCDYTLqq5w&amp=&index=14&amp=&t=0s'>
                      <img className='youtube-icon'
                        src='https://basejump.co.uk/wp-content/uploads/2016/03/youtube-logo.png'>
                      </img>
                    </a>
                    <a id='jamspace-github' className='project-github' href='https://github.com/Fullstack-JamSpace/JamSpaceTV'>
                      <img className='project-github-icons' src='https://jriccardi.com/github-icon.svg'></img>
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
                <h3 className='project-description-header'>
                  steppr.io
                </h3>
                <p id='steppr-description-text' className='project-description-text'>
                  steppr.io is a a trio of sixteen-step music sequencers designed for real-time interaction and music
                  creation. The trio is made up of a lead synthesizer, a bass synth, and a drum machine, which
                  allow for live note entry by clicking on a step while the sequencers are running. Each player is given
                  the option to change sounds on the fly, as well as a fader for level control. Any of these changes will
                  be seen and heard by the other player, and making music together becomes very immediate.
                </p>
                <div className='project-description-links'>
                  {/*<div className='project-url-container'>
                    <a className='project-url' href='http://www.steppr.io'>steppr.io</a>
                  </div>*/}
                  <div className='project-description-icons'>
                    <a className='project-youtube' href='https://www.youtube.com/watch?v=bvj3dOitsOE&amp=&feature=youtu.be'>
                      <img id='steppr-youtube-icon' className='youtube-icon'
                        src='https://basejump.co.uk/wp-content/uploads/2016/03/youtube-logo.png'>
                      </img>
                    </a>
                    <a className='project-github' href='https://github.com/james-byrd/steppr.io'>
                      <img className='project-github-icons' src='https://jriccardi.com/github-icon.svg'></img>
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
                <h3 className='project-description-header'>
                  Sockr
                </h3>
                <p className='project-description-text'>
                  Sockr is a one-stop-shop for single socks. We are the answer to all of your missing sock prayers,
                  and we do not seek to appease those in search of a complete pair. Try as you might, but you will not
                  find an even number of socks in sight. Search high and low, but one, three, five, seven, and nine
                  socks is all we know.
                </p>
                <div className='project-description-links'>
                  <div className='project-url-container'>
                    <a className='project-url' href='https://sockr.herokuapp.com'>sockr.herokuapp.com</a>
                  </div>
                  <div className='project-description-icons'>
                    <a className='project-github' href='https://github.com/Fullstack-GraceShopper/GraceShopper'>
                      <img className='project-github-icons' src='https://jriccardi.com/github-icon.svg'></img>
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