import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore} from 'redux';
import './index.css';
import App from './containers/App'; //App.js
//import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers'
import 'tachyons'
import { robots } from './robots'
import { BasicForm as Form, createInput } from 'react-json-form'

const store =  createStore(searchRobots)

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root'));

registerServiceWorker();





