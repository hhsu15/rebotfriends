import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App'; //App.js
//import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers'
import 'tachyons'

// create a store, taking one arg which is your reducer
// acts like a memory
// normally you would pass rootRuducers which is all the functions
const store =  createStore(searchRobots)


// now we use Provide and pass the store to the App
ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>, 
		document.getElementById('root'));

registerServiceWorker();





