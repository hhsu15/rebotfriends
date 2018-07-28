import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'; //App.js
//import Hello from './Hello'; //App.js
//import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'
import { robots } from './robots'
import Cardlist from './Cardlist'

//Just some component examples
//ReactDOM.render(<App />, document.getElementById('root'));
// you can also pass args/props to the conponent
//ReactDOM.render(<Hello greetings={'hello there'}/>, document.getElementById('root'));
//ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));


ReactDOM.render(
	// show the component and pass the properties
	<div>
		<Cardlist robot_array={ robots }/>
	</div> ,
	// document.getElementById('root'));
	document.querySelector('#root'));



registerServiceWorker();
