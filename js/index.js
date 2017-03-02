import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Projects from './projects'
import Resume from './resume'
import Home from './home'
import $ from 'jquery'



render(
  (
    <Router history={ hashHistory }>
      <Route component={ App }>
        <Route path="/" component={ Home } />
        <Route path="/Projects" component={ Projects } />
        <Route path="/Resume" component= { Resume } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
