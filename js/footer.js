import React from "react"
import { Link } from 'react-router'


export default React.createClass({

  render () {
    return (
      <section>
        <footer>
          <nav>
            <Link to="/" className="navLink"> Home |</Link>
            <Link to="/resume" className="navLink"> Resume |</Link>
            <Link to="/projects" className="navLink"> View Projects </Link>
          </nav>
        </footer>
      </section>
    )
  }
})
