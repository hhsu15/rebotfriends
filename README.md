# Redux tutorial
## Create Actions
- create actions.js file.
- Define your function for actions, such as:
- for the constants, a good practice is to create a file to manage all the constants
- such as `constants.js`

## Create Reducers
- create reducers.js
- create initial state such as:
- create the function that takes the state and action
- the function returns a new state (using Object.assign(), or spread operator) depending on the action type

## Connect the parts
- in the `index.js` import Provider from react-redux
- create the store (store is a big object that describes all states - single source of truth)
- add the reducers to the store (use root reducers)
- pass the `store` into the App component (and other components) using Provider component
- then you will see you can use this.props.store.getState() to get the state

## Connect the parts 2
- go to the containers (e.g, App.js) and import the actions
- import the connect from react-redux
- at the bottom we are going to change the export component to something like this:
```javascript
export default connect(mapStateToProps, mapDispatchToProps)(App)
```
- go back to the stop and define thosem two functions 
- mapStateToPros: take the state which has the reducers and return an object with the reducer
- mapDispatchToProps: has the dispatch function  to send actions. Return an object with the actions
- now, we can replace the state with the props when passing down the props
- go ahead and replace those states with props




