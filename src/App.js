import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState(
    {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Dani', age: 30},
        { name: 'Kószó', age: 30}
      ]
    }
  );

const [ otherValues, setOtherValues ] = useState('some other value');

console.log(personsState, otherValues);

const switchNameHandler = () => {
  //  console.log('CLicked');
  // DO NOT DO!!! this.state.persons[0].name = 'Deiiiii';
  setPersonsState({persons: [
    { name: 'Max', age: 28 },
    { name: 'Dani', age: 30},
    { name: 'Tasi', age: 31}
  ]})
  };
  
  // The old state won't be merged after this state manupilation. In the switched state the "oterValues: 'some other value'" will miss!!!!!!!!

  return (
    <div className="App">
      <h1>Hi! I'm React App!</h1>
      <p>It's working</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Gaming</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
};  

export default app;

