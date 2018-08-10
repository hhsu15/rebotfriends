import { CHANGE_SEARCH_FIELD,
		 REQUEST_ROBOTS_PENDING,
		 REQUEST_ROBOTS_SUCCESS,
		 REQUEST_ROBOTS_FAILED,
 } from './constants.js'

// create an action
// here, the action is just an obj that we are returning
// the obj tells you the type and payload
export const setSearchField = (text) => { // this we can save the return statement
	//console.log(text)
	return({
		type: CHANGE_SEARCH_FIELD,
		payload: text
	})
}

// for asyc 
// takes dispatch as parameter 
// Very difficule! here we are returning a function rather than a standard obj that redux would expect
// by adding redux-thunk middleware, we are listening to this function
// so everytime the requestRobots gets triggered, it's going to trigger redux-thunk
// and redux-thunk is going to know and give you a dispatch to call some action
// so we can finally run our action (from line 27)
export const requestRobots = () => (dispatch) => {
	//first send the type as pendning
	dispatch({ type: REQUEST_ROBOTS_PENDING });
	// then make the api call
	fetch('https://jsonplaceholder.typicode.com/users') 
	 	.then(response => response.json())
	 	// then send the type as success
	    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload:data }))
	    // otherwise send the type as error
	    .catch(error => dispatch({ REQUEST_ROBOTS_FAILED, payload: error }))
	}