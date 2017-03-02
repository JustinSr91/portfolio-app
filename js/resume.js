import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render(){

    return(
          <div className="wrapper">
              <div className="sidebar-wrapper">
                  <div className="profile-container">
                      <img className="profile" src="/styles/Headshot1.jpg" alt="" />
                      <h1 className="name">Justin Strayhorn</h1>
                      <h3 className="tagline">Front End Developer</h3>
                  </div>

                  <div className="contact-container container-block">
                      <ul className="list-unstyled contact-list">
                          <li className="email"><i className="fa fa-envelope"></i><a href="mailto: justin.strayhorn@hotmail.com">justin.strayhorn@hotmail.com</a></li>
                          <li className="phone"><i className="fa fa-phone"></i><a href="tel:210 763 9608">210 763 9608</a></li>
                          <li className="linkedin"><i className="fa fa-linkedin"></i><a href="https://www.linkedin.com/in/justin-strayhorn" target="_blank">linkedin.com/in/justin-strayhorn</a></li>
                          <li className="github"><i className="fa fa-github"></i><a href="https://github.com/JustinSr91?tab=repositories" target="_blank">github.com/JustinSr91</a></li>
                      </ul>
                  </div>
                  <div className="education-container container-block">
                      <h2 className="container-block-title"> Education </h2>
                      <div className="item">
                          <h4 className="degree"> Front End Engineering Certificate of Completion </h4>
                          <h5 className="meta"> The Iron Yard, San Antonio </h5>
                          <div className="time">2016 - 2017</div>
                      </div>
                      <div className="item">
                          <h4 className="degree"> General Studies </h4>
                          <h5 className="meta"> University of Cincinnati </h5>
                          <div className="time"> 2009 - 2010 </div>
                      </div>
                      <div className="item">
                          <h4 className="degree"> H.S. Diploma </h4>
                          <h5 className="meta"> Mt. Healthy High School </h5>
                          <div className="time"> 2005 - 2009 </div>
                      </div>
                  </div>
              </div>

              <div className="main-wrapper">

                  <section className="section summary-section">
                      <h2 className="section-title"><i className="fa fa-user"></i> Career Profile </h2>
                      <div className="summary">
                          <p> My experience in various industries has cultivated a passion for people, technology, and problem solving which led me to explore a career as a Developer. I am a Front-End Engineering coding bootcamp graduate from The Iron Yard - San Antonio, and currently seeking an entry-level Developer position with a solid tech company. My goal is to gain professional experience, remote or office-based, where I will be given the opportunity to grow my skills and help create solutions to real world problems. I wish to help a company grow and maintain success, while keeping the needs of the client as first priority. I am currently available for hire, so feel free to reach out to me with any questions! </p>
                      </div>
                  </section>

                  <section className="section projects-section">
                      <h2 className="section-title"><i className="fa fa-archive"></i> Projects </h2>
                      <div className="intro">
                          <p> Some of my Work: </p>
                      </div>
                      <div className="item">
                          <span className="project-title"><a href="https://retro-pigskin-app.herokuapp.com"> Retro Pigskin </a></span> - <span className="project-tagline"> This application delivers full NFL games from late 1990’s to early 2000’s. I used React.js to develop, while Node.js was used for server side deployment. </span>
                      </div>
                      <div className="item">
                          <span className="project-title"><a href="https://client-week.herokuapp.com/" target="_blank"> All Things Spurs </a></span> -
                          <span className="project-tagline"> San Antonio Spurs web app that was built with React.js and deployed with Node.js. It allows users to create blog posts for recent Spurs games while taking advantage of the quickness of Modal functionality. </span>
                      </div>
                      <div className="item">
                          <span className="project-title"><a href="https://youtube-mock.herokuapp.com/index.html" target="_blank"> YouTube Mock </a></span> - <span className="project-tagline"> This static project is a mock YouTube video page that I created to test my ability to follow a wireframe. It was created using HTML, CSS, and deployed with PHP. </span>
                      </div>
                  </section>

                  <section className="skills-section section">
                      <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                      <div className="skillset">
                          <div className="item">
                              <h3 className="level-title"> I have created applications using: </h3>
                          </div>

                          <div className="item">
                              <h3 className="level-title"> HTML5 &amp; CSS3 </h3>
                          </div>

                          <div className="item">
                              <h3 className="level-title"> JavaScript and jQuery </h3>
                          </div>

                          <div className="item">
                              <h3 className="level-title"> React.js </h3>
                          </div>

                          <div className="item">
                              <h3 className="level-title"> Bootstrap </h3>
                          </div>
                          
                          <div className="item">
                              <h3 className="level-title"> Git • Github </h3>
                          </div>

                      </div>
                  </section>

              </div>
          </div>
    )
    }
  })
