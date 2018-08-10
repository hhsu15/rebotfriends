import { CHANGE_SEARCH_FIELD,
		 REQUEST_ROBOTS_PENDING,
		 REQUEST_ROBOTS_SUCCESS,
		 REQUEST_ROBOTS_FAILED,
 } from './constants.js'

const initialstateSearch = {
	searchField : ''
}

// the reducer is a function that takes the state and the action
// and return the updated state!! very importtant
export const searchRobots = (state=initialstateSearch, action={}) => {
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

const initialstateRobots = {
	isPending : false, 
	robots: [],
	error:''
}

export const requestRobots = (state=initialstateRobots, action={}) => {
	switch (action.type) {
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, {isPending:true})
	    case REQUEST_ROBOTS_SUCCESS:
	    	return Object.assign({}, state, { robots:action.payload, isPending:false})
	    case REQUEST_ROBOTS_FAILED:
	    	return Object.assign({}, state, { error:action.payload, isPending:false})		
	    default:
	    	return state; //with reducer, always return state
	}
}