import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from './store';

export default class AllCats extends Component {
  constructor () {
    super();
    this.state = store.getState();
  }

 componentDidMount() {
   this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
 }

 componentWillUnmount() {
   this.unsubscribe();
 }
 render() {
   const cats = //something that comes from our store
   return (
   	<div className="all-cats">
   	 <ul>
     cats.map( (cat) => (
        <Link to={`/cat/${cat.id}`}>
          {cat.name}, {cat.ageInYears}
        </Link>
     	))
     </ul>
    </div>
   	)
 }
}
