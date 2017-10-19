import React, { Component } from 'react';
import store, { fetchCat } from './store';

export default class SingleCat extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    const id = this.props.match.params.catId;
    store.dispatch(fetchCat(id));
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const cat = this.state.singleCat;
    return (
      <div className="single-cat">
        {
          cat.id && (
          <div>
            <h2>{cat.name}</h2>
            <ul>
              <li>{cat.ageMonths} months old</li>
              <li>{cat.breed}</li>
            </ul>
            <p>{cat.description}</p>
          </div>
        )
      }
      </div>
    )
  }
}
