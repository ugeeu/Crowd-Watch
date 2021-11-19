import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import './base.css'
import Demo1 from './demos/Demo1'
import Demo2 from './demos/Demo2'

// Demos inspired by:
// https://twitter.com/beesandbombs/status/1329796242298245124

function App() {
  return (
    <Router basename="/">
      <div className="frame">



      </div>
      <div className="content">
        <h2 className="content__title">Crowd Watch</h2>
      </div>
      <div id="animation">




      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
