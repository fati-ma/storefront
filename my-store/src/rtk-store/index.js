import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import categories from './categoriesSlicer';
import products from './productsSlicer';
import cart from './cartSlicer';


const reducers = combineReducers({ categories: categories, products: products, cart: cart })
const store = configureStore({ reducer: reducers });

export default store;