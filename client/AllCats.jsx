import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, { fetchCats } from './store';

export default class AllCats extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.dispatch(fetchCats())
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const cats = this.state.allCats
    return (
      <div className="all-cats">
      <ul>
      {
        cats.map( (cat) => (
         <li key={cat.id}>
           <Link to={`/cat/${cat.id}`}>
             {cat.name}, {cat.ageInYears} old
           </Link>
         </li>
        ))
      }
      </ul>
    </div>
    )
  }
}
