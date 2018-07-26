import React, { Component } from 'react';
import './Hello.css'
// Create a component called Hello
// Create a class and extends Component
class Hello extends Component {
    
    // Here you need to render your result
    // it will look lile an html (but it's actually not)
	render() {
		// make sure you wrap the entire thing using () 
		// for the html content you need to put a tag like div
		// to wrap the whole content
		return (

			// use tachyons here, use classNmae 
			// search the className you can use on their website
			 <div className="vh-100 dt w-100 tc bg-dark-gray white cover" style={{backgroundImage: `url(http://mrmrs.github.io/photos/u/009.jpg`}} >
			 	<div class="dtc v-mid">
					<h1 className='f3 f-headline-l fw1 i tc'>Hello World</h1>
					<h2 class="f3 f-headline-l fw1 i white-90">Ha it works!!! Welcome to React</h2>
					<h2>Is tachyons working???</h2>
					<h2>Now it's working</h2>
					<h2>this is from the props : {this.props.greetings}</h2>
					<div class="aspect-ratio aspect-ratio--1x1">
						<p>What does this look like?</p>
	    			</div>
    			</div>
			</div>
			)
	}
}

export default Hello;