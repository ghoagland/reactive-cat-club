import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//initial state

const initialState = {
  allCats: [],
  singleCat: {},
  user: {}
}

//action types

const GET_ALL_THE_CATS = 'GET_ALL_THE_CATS';
const GET_ONE_CAT = 'GET_ONE_CAT';
const GET_ONE_USER = 'GET_ONE_USER';

//action creators

const getCats = (cats) => ({type: GET_ALL_THE_CATS, cats})
const getOneCat = (cat) => ({type: GET_ONE_CAT, cat})
const getUser = (user) => ({type: GET_ONE_USER, user})

// thunk creators

export const fetchCats = () => {
 return function thunk(dispatch) {
  return axios.get('/api/cats')
  .then( res => res.data)
  .then((cats) => {
    return dispatch(getCats(cats))
  })
  .catch((err) => { console.log(err)});
 }
}

export const fetchCat = (catId) => {
 return function thunk(dispatch) {
  return axios.get(`/api/cats/${catId}`)
  .then( res => res.data)
  .then((cat) => {
    return dispatch(getOneCat(cat))
  })
  .catch((err) => { console.log(err)});
 }
}

export const fetchUser = (userId) => {
  return function thunk(dispatch) {
    return axios.get(`/api/users${userId}`)
     .then ((res) => dispatch(getUSer(res.data)) )
     .catch((err) => { console.log(err)})
  }
}

//reducer

function reducer (state = initialState, action) {
  switch(action.type){
    case GET_ALL_THE_CATS:
      return {...state, allCats: action.cats}
    case GET_ONE_CAT:
      return {...state, singleCat: action.cat }
    case GET_ONE_USER:
      return {...state, user: action.user}
    default:
      return state;
  }
}


const store = createStore(reducer, applyMiddleware(createLogger, thunkMiddleware));

export default store;


















