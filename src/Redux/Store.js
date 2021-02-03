import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger'
import BookReducer from '../Redux/book/BookReducer';

const Store = createStore(BookReducer,applyMiddleware(logger));

export default Store;