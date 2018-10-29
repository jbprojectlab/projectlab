import React, {Fragment} from 'react'

export const About = props => {
  return (
    <Fragment>
      <div id='about-container'>
        <div id='about-text-container'>
          <h3 id='about-title'>About Me</h3>
          <p id='about-text'>
            I love to create, and I love being around people who love to create.
            After playing competitive golf for most of my youth, I gained a passion for music
            in college, and taught myself to play several instruments. Through learning
            the ins-and-outs of song writing, sound engineering, and audio synthesis, I found
            an appreciation for computer-based music, and eventually software development.
            Once I realized there was a way to build whatever I could imagine, without being
            bound by any particular medium, I became immediately hooked. Now I am in the process
            of working on some ideas that have me feeling inspired, in addition to looking for
            like-minded collaborators and cool projects to get involved with. If you think we
            could work on something or need help with a project you feel would suit me,
            reach out and we can put our heads together. You can also check out some of my
            current work below.
          </p>
        </div>
        <div id='photo-container'>
          <img id='photo' src='https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png'></img>
        </div>
      </div>      
    </Fragment>
  )
}
