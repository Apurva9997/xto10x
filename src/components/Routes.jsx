import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/HomePage.jsx';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div className="layout">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

// const Home = () => <div>Home</div>
const PageNotFound = () => <div>Page not found</div>