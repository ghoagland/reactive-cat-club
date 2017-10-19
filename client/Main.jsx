import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AllCats from './AllCats.jsx';
import SingleCat from './SingleCat.jsx';

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <h1>Welcome to Cat Club!</h1>
        <Switch>
          <Route path="/all-cats" component={ AllCats } />
          <Route path="/cat/:catId" component={SingleCat} />
          <Route component={ AllCats } />
        </Switch>
      </div>
    )
  }
}

