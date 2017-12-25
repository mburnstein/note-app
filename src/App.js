
import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import List from './components/List';
import Note from './components/Note';


class App extends Component {
  constructor() {
    super();
    this.state = {
      showNote: false
    };
  }


render() {
  const { showNote } = this.state; //object destructuring

  return (
    <div className="App">
      <Nav />
      { showNote ? <Note /> : <List /> }
    </div>
  );
}
}

export default App;