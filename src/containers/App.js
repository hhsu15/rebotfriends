import React, { Component } from 'react';
import './App.css';
import Cardlist from '../components/Cardlist';
import 'tachyons';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'

// the connect components are the componets who know redux
// we need to pass those smart components so they are subsribed 
// when the states are changed
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions'

// the state is coming from the "store" from the Provider
const mapStateToProps = state => {
  console.log('state:',state)
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

// dispatch is something that triggers the action
// we use dispatch to send the action into the reducer
const mapDispatchToProps = (dispatch) => {
  return {
    //this is an input box user types
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
} 

class App extends Component {
  
  //no need the constructor for states anymore 
  
  // react built-in method, like constructor, render, they are called lifecycle hooks
  // this gets called when the components are mounted and 
  // website rendered something
  // see: https://reactjs.org/docs/react-component.html
  componentDidMount(){ 
    // console.log(this.props.store) //check what store is
    this.props.onRequestRobots()
  }
  
  // rule of thumb: when you define your own method in react component,
  // use arrow function like below
  // so "this" stays as the react component
  // onSearchChange = (event) => {
  //   // you have to use setState to set attribute of the state
  //   this.setState({searchfield: event.target.value})
  // }

  render() {
    // I have access to this.props which has the state I need
    // every time the search field changes this gets hit
    console.log('props: ',this.props)
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    
    //show off ternary operator
    return isPending ? 
      <h1>Loading..</h1> :
      (
        <div className='tc'>
          <h1 className='f1 f-headline-l fw1 i tc white'>RobotFriends</h1>
          <SearchBox searchChange={ onSearchChange }/>
          <Scroll>
            <ErrorBoundry>
              <Cardlist robot_array={ filterRobots }/>
            </ErrorBoundry>
          </Scroll> 
        </div>
      )
    }
}


// connect accept two params, by standard, mapStateToProps and mapDispatchToProps
// connect is a higher order function which returns another function and manipulates it
// we connect the App component to the redux store,
// so App knows every time when there is a change to the store it might be interested in
// and we define what state should App listen to
// and what dispatch(action) should App listen to
// mapStateProps is what state (as an obj) I should listen to and send to props
// mapDispatch is what actions (as an obj) I should pass to props
export default connect(mapStateToProps, mapDispatchToProps)(App); 

// what happens is that every time:
// action happens => reducer changes props => contents re-renders

