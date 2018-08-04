import React, { Component } from 'react';
import Card from './Card';

const Cardlist = ({robot_array}) => {
	//just to test the error boundry
	// if(true) {
	// 	throw new Error('Noooooooo')
	// }
    const robot_arr = robot_array.map((robot, index) => {
    	return(
			<Card key={index} id={robot.id} name={robot.name} email={robot.email}/>
    	)
     }    
    )
	return (
		<div>
		{robot_arr}
		</div>
	)	
}

export default Cardlist