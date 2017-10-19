import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, { fetchCat } from './store';

export default class SingleCat extends Component {
  constructor() {
  	super();
  	this.state = store.getState();
  }

  componentDidMount() {
  	//teachable moment -- why is naming this fetchCat bad?
  	const thunk = fetchCat(this.props.match.params.catId);
  	store.dispatch(thunk);
  	this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
  	this.unsubscribe();
  }

  render() {
  	const cat = this.state.singleCat;
    console.log('cat', cat);
     return(
      <div className="single-cat">
        <h1>{cat.name}</h1>
         <ul>
           <li>{cat.ageInYears} old</li>
           <li>{cat.breed}</li>
         </ul>
         <p>{cat.description}</p>
       </div>
     	)

  }
}
