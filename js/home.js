import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render(){

    return(
      // 1st container w/headshot and tagline
      <section className="headshot__section">
        <div>
          <p className="aboutContent"> a creative mind focused on creative development </p>
          <img src="/styles/Headshot1.jpg" className="photo"></img>
        </div>
      <section>
        <div className="infoDiv1">
          <li className="infoList"> Justin - Front End Engineer </li>
          <li className="infoList"> Graduated from The Iron Yard - Front End Engineering Program </li>
        </div>
        <div className="infoDiv2">
          <a href="https://github.com/JustinSr91" className="link" target="_blank">
            <i className="fa fa-github"></i>
            <li className="socialLink"> GitHub |</li></a>
          <a href="https://www.linkedin.com/in/justin-strayhorn" className="link" target="_blank">
            <i className="fa fa-linkedin"></i>
            <li className="socialLink"> LinkedIn </li></a>
        </div>
        <div className="container-bio">
          <p className="p-bio"> Eager Junior Developer that posseses a never ending passion for learning and improvement. I’ve worked with Front End tools and languages such as JavaScript, React.js, HTML5, CSS3, and have utilized Node.js, Express, and Heroku for deployment of web applications. I also very frequently utilize Git/Github. My wish is to continue to pick up cool new skills as a Developer and selflessly deliver creative solutions to my employer, teammates, and clients. I believe my strongest attribute is my willingness and ability to be taught, so I pick up new concepts very quickly. I also really enjoy coffee.
          </p>
        </div>
      </section>
      </section>
    )
    }
  })
