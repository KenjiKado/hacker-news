import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import mainReducer from './reducers/mainReducer';
import rootSaga from './sagas/rootSaga';

function configureStore(initialState?: any) {
	const sagaMiddleware = createSagaMiddleware();

	const middlewares = [
		sagaMiddleware
	];

	const store = createStore(
		mainReducer,
		initialState,
		composeWithDevTools(applyMiddleware(...middlewares)),
	);

	sagaMiddleware.run(rootSaga);

	return store;
}

export const store = configureStore();