import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SectionList from './components/SectionList/SectionList';
import sections from './mockData/sections';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-secondaryNav">
          <h2>Sections</h2>
        </div>
        <div className="App-container">
          <div className="App-sideNav col-xs-2" />
          <div className="App-content col-xs-10">
            <SectionList sections={sections} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
