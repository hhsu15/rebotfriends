import { CHANGE_SEARCH_FIELD } from './constants.js'

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
