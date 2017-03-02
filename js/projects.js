import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <h1 className="projectsHeading"> Latest Projects </h1>
        <a href="https://retro-pigskin-app.herokuapp.com/#/"
           target="_blank"
           className="projectLink">
          <li className="projectList"> Retro Pigskin </li>
          <img className="project-screenshot" src="styles/retro-pigskin.jpg" />
        </a>
        <p className="project-description"> This application delivers full NFL games from late 1990’s to early 2000’s. </p>
        <a href="https://youtube-mock.herokuapp.com/index.html"
           target="_blank"
           className="projectLink">
          <li className="projectList"> YouTube Mock </li>
        <img className="project-screenshot" src="styles/Youtube-mock.jpg" />
        </a>
        <p className="project-description"> A non-functioning mock version of YouTube. The styling of the page matches the authentic YouTube website. Created for practice purposes. </p>
        <a href="https://client-week.herokuapp.com"
           target="_blank"
           className="projectLink">
          <li className="projectList"> All Things Spurs </li>
          <img className="project-screenshot" src="styles/all-things-spurs.jpg" />
        </a>
        <p className="project-description"> This San Antonio Spurs web application allows users to create blog posts for recent Spurs games. </p>
      </section>
    )
  }
})
