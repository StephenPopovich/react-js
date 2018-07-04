import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'Some Other Value'
  }

  switchNameHandler = () => {
    // console.log('working!');
    this.setState({
      persons:[
      {name: 'Mark', age: 31},
      {name: 'Sarah', age: 29},
      {name: 'Charolette', age: .5}
    ]
    })
  }
  render() {
    return (
      <div className="App">
       <h1>Hi It's React  </h1>
       <p> this is really working </p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing </Person>
       <Person name={this.state.persons[2].name}  age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
