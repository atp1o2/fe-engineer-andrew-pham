import React, { Component } from 'react';
import './NavBar.css'
import logo from '../assets/logo.svg';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <img src={logo} className="NavBar-logo" alt="Practice XYZ" />
        <h1>
          <span className="NavBar-header">Practice</span>
        </h1>
      </div>
    );
  }
}

export default NavBar;
