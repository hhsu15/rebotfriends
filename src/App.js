import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cardlist from './Cardlist';
import { robots } from './robots';
import 'tachyons';
import SearchBox from './SearchBox';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }



// export default App;
// We introduce to the notion of "STATE"
// State is an object that describes your App
// i.,e in this app, State is what the components are 
// and what are the props for each component
// STATE => props (a parent feeds the state/props into a child)

// Let's declear the STATE

class App extends Component {
  constructor() {
    super()
    this.state =  {
      robots: robots,
      searchfield: '' //just initialize the searchfield var
    }
  }
  
  // rule of thumb: when you define your own method in react component,
  // use arrow function like below
  // so "this" stays as the react component
  onSearchChange = (event) => {
    // you have to use setState to set attribute of the state
    this.setState({searchfield: event.target.value})
  }

  render() {
    const filterRobots = this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return(
      <div className='tc'>
        <h1 className='f2 f-headline-l fw1 i tc'>RobotFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Cardlist robot_array={ filterRobots }/>
      </div>
      )
  }
}


export default App;