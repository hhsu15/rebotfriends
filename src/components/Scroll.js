import React from 'react';

/*
Create your own style function
which can be used to wrap anything you want
*/

//props have children. 
//ie., things wrapped in Scroll tag
//props.children
const Scroll = (props) => {
	return (
			<div style={{overflowY: 'scroll', border: '3px solid black', height: '550px'}}>
				{props.children} 
			</div>
		)
}

export default Scroll;