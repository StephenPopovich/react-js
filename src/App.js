import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi It's React  </h1>
       <p> this is really working </p>
       <Person name="max" age="23"/>
       <Person name="john" age="28">My Hobbies: Racing </Person>
       <Person name="jill" age="13"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
