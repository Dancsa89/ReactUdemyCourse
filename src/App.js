import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Dani', age: 30},
      { name: 'Kószó', age: 30}
    ]
  }

  switchNameHandler = () => {
  //  console.log('CLicked');
  // DO NOT DO!!! this.state.persons[0].name = 'Deiiiii';
  this.setState({persons: [
    { name: 'Max', age: 28 },
    { name: 'Dani', age: 30},
    { name: 'Tasi', age: 31}
  ]})
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi! I'm React App!</h1>
        <p>It's working</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Gaming</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
  // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi! I\'m React App!!!!'));
}

export default App;
