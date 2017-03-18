import { createStore } from 'redux';
import reducer from './reducers/index.reducer';

export default function configureStore(initialState = {}) {
	const store = createStore(reducer, initialState);

	if(module.hot){
		// enable webpack hot module replacement for reducers
		module.hot.accept('./reducers/index.reducer', () => {
			const nextReducer = require('./reducers/index.reducer');
			store.replaceReducer(nextReducer);
		});
 	}

 	return store;

}