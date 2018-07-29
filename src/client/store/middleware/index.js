import thunk from 'redux-thunk';

const middleware = [
  thunk.withExtraArgument(process.env.REACT_APP_API_URL)
];

export default middleware;
