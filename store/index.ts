import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas';
import reducer from '../reducers'

const configureStore = ((initialState, options) => {
  console.log(options)
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(
      applyMiddleware(...middlewares),
    );
  const store = createStore(reducer,initialState,enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store
})

const wrapper =createWrapper(configureStore, {
    debug: process.env.NODE_ENV === ' development'
})

export default wrapper;