import React, { Component } from 'react';

//By the way, this is called JSX
// We have two ways to do this. We can simply use a function

/*
const Card = ({name, email, id}) => { //this is called destructuring
	return(
		   //background   dib(autoadjust size) border3 padding3 margin2 grow(animation) whilte text, bw? and some shadow
		<div className='bg-dark-green dib br3 pa3 ma2 grow white bw2 shadow-5' >
			<img alt='autobot' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		)

}

export default Card;
*/

// or we can define a class
class Card extends Component{ //destructuring
	render(){
	return(
		   //background   dib(autoadjust size) border3 padding3 margin2 grow(animation) whilte text, bw? and some shadow
		<div className='bg-dark-green dib br3 pa3 ma2 grow white bw2 shadow-5' >
			<img alt='autobot' src={`https://robohash.org/${this.props.id}?200x200`} />
			<div>
				<h2>{this.props.name}</h2>
				<p>{this.props.email}</p>
			</div>
		</div>
		)

	}
}
export default Card;