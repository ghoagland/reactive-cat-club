import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, { fetchCats } from './store';

export default class AllCats extends Component {
  constructor () {
    super();
    this.state = store.getState();
  }

 componentDidMount() {
 	const thunk = fetchCats();
 	store.dispatch(thunk);

   this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
 }

 componentWillUnmount() {
   this.unsubscribe();
 }
 render() {
   const cats = this.state.allCats;
   return (
   	<div className="all-cats">
   	 <ul>
     {
     	cats.map( (cat) => (
        <li key={cat.id}>
        <Link to={`/cat/${cat.id}`}>
          {cat.name}, {cat.ageInYears}
        </Link>
        </li>
     	))
     }
     </ul>
    </div>
   	)
 }
}
