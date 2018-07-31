import React, { Component } from 'react';
import Card from './Card';

class Cardlist extends Component {
	render() {
        const robot_arr = this.props.robot_array.map((robot, index) => {
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
}

export default Cardlist