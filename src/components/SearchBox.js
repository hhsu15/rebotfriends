import React, { Component } from 'react'

class SearchBox extends Component {
	render() {
		return(
			//with some padding
			<div className='pa2' id='searchbar'>
				<input
                    //padding, autoajustment, border, backround
					className='pa3 ba b--green bg-lightest-blue'
					type='search' 
					placeholder='search robots'
					onChange={this.props.searchChange} 
				/>
			</div>
			);
	}
}
export default SearchBox