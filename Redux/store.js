import createSagaMiddleware from 'redux-saga';
import {appReducer} from './reducer';
import {applyMiddleware, createStore} from 'redux';
import {rootSaga} from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export {store};
