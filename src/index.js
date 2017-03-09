import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from 'react-redux';

import App from './containers/App';
import confugureStore from './store/configureStore'
import './index.css';

window.React = React;
injectTapEventPlugin();

const store = confugureStore();

ReactDOM.render(
  <Provider store={store}>
  < App / >
  </Provider>,
  document.getElementById('root'));
