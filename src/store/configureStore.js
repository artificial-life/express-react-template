import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import basicSaga from '../sagas/basicSaga'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const enchancer = applyMiddleware(sagaMiddleware);

  const store = createStore(rootReducer, initialState, enchancer);

  sagaMiddleware.run(basicSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module
      .hot
      .accept('../reducers', () => {
        const nextReducer = require('../reducers');
        store.replaceReducer(nextReducer);
      });
  }

  return store;
}
