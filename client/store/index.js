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

const GET_ALL_CATS = 'GET_ALL_CATS';
const GET_ONE_CAT = 'GET_ONE_CAT';
const GET_USER = 'GET_USER';


//action creators 

const getCats = (cats) => ({ type: GET_ALL_CATS, cats })
const getOneCat = (cat) => ({type: GET_ONE_CAT, cat })
const getUser = (user) => ({ type: GET_USER, user })

// thunk creators 

export const fetchCats = () => {
  return thunk(dispatch) {
  	return axios.get('/api/cats')
  	 .then(res => res.data)
  	 .then((cats) => {
  	 	return dispatch(getCats(cats))
  	 })
  }
}

export const fetchCat = (catId) => {
  return thunk(dispatch) {
  	return axios.get('/api/cats/cat/')
  }
}
