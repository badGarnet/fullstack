import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuConmponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark">
          <div className="container">
            <NavbarBrand href="/">Restaurant Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
