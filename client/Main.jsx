import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AllCats from './AllCats.jsx';
import SingleCat from './SingleCat.jsx';
import SingleUser from './SingleUser.jsx';
 //<Route path='/cat/:catId' component={SingleCat} />

export default class Main extends Component {
  render() {
    return (
     <div className="we-need-a-div-here">
      <h1>Welcome To Cat Club!</h1>
      <Switch>
        <Route path='/all-cats' component={AllCats} />
  
        <Route component={AllCats} />
      </Switch>
     </div>
    )
  }
}

