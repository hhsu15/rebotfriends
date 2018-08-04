import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Cardlist from '../components/Cardlist';
import { robots } from '../robots';
import 'tachyons';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'


class App extends Component {
  constructor() {
    super()
    this.state =  {
      robots: [], // initialize with empty arr, lets use api
      searchfield: '' //just initialize the searchfield var
    }
  }
  
  // react built-in method, like constructor, render, they are called lifecycle hooks
  // this gets called when the components are mounted and 
  // website rendered something
  // see: https://reactjs.org/docs/react-component.html
  componentDidMount(){ 
    console.log(this.props.store) //check what store is
    fetch('https://jsonplaceholder.typicode.com/users') //make API call
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }
  
  // rule of thumb: when you define your own method in react component,
  // use arrow function like below
  // so "this" stays as the react component
  onSearchChange = (event) => {
    // you have to use setState to set attribute of the state
    this.setState({searchfield: event.target.value})
  }

  render() {
    const { robots, searchfield } = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
    //show off ternary operator
    return !robots.length ? 
      <h1>Loading..</h1> :
      (
        <div className='tc'>
          <h1 className='f1 f-headline-l fw1 i tc white'>RobotFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <Cardlist robot_array={ filterRobots }/>
            </ErrorBoundry>
          </Scroll> 
        </div>
      )
    }
}



export default App;