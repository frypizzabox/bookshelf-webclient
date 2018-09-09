import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

/* Redux Store */
const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

/* React Router */
ReactDOM.render(
  <Provider store={store}>
    <div />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
