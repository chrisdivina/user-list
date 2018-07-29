import { createStore, applyMiddleware, compose } from 'redux';
import middleware from './middleware';
import reducers from '../reducers';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);
