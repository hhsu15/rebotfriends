import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //App.js
import Hello from './Hello'; //App.js
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'


//ReactDOM.render(<App />, document.getElementById('root'));
// you can also pass args/props to the conponent
ReactDOM.render(<Hello greetings={'hello there'}/>, document.getElementById('root'));
//ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));

registerServiceWorker();
