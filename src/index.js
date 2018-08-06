import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App'; //App.js
//import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers'
import 'tachyons'

// create logger
const logger = createLogger()

// create a store, taking one arg which is your reducer
// acts like a memory
// normally you would pass rootRuducers which is all the functions
// use the applyMiddleware - this allows you to apply any function you are intertested in 
// listening to the actions
const store =  createStore(searchRobots, applyMiddleware(logger))


// now we use Provide and pass the store to the App
ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>, 
		document.getElementById('root'));

registerServiceWorker();





