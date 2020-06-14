import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: 1, name: 'Max', age: 28 },
      {id: 2, name: 'Dani', age: 30 },
      {id: 3, name: 'Kószó', age: 30 }
    ],
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    // const modifiedPersons = this.state.persons.slice();
    const modifiedPersons = [...this.state.persons];
    modifiedPersons.splice(personIndex, 1);
    this.setState({persons: modifiedPersons})
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {...this.state.persons[personIndex]};
    
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const updatedPersons = [...this.state.persons];
    updatedPersons[personIndex] = person;

    this.setState({
      persons: updatedPersons
    })
  };

  togglePersonsHandler = () => {
    const doShow = this.state.showPersons
    this.setState({ showPersons: !doShow })
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi! I'm React App!</h1>
        <p>It's working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Switch view</button>
        {persons}
      </div>
    );
  }
  // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi! I\'m React App!!!!'));
};

export default App;
