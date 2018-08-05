import { CHANGE_SEARCH_FIELD } from './constants'

const initialstate = {
	searchField : ''
}

// the reducer is a function that takes the state and the action
// and return the updated state!! very importtant
export const searchRobots = (state=initialstate, action={}) => {
	// console.log(action.type)
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:

		    // This is saying we return a new state without modifying the original state
		    // we are taking whatever the current state and assigning the payload to the searchfield
		    // standard redux way
			return Object.assign({}, state, {searchField: action.payload})
            
            //you can also use this fancier way
            //called object sread operator
            //return { ...state, {searchField: action.payload}}

        default:
        	return state

	}
}