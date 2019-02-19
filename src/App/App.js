import React, { Component } from 'react';
import NavBar from '../components/NavBar';
class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
