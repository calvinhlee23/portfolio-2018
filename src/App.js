import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';

import Header from './header/Header.jsx';
import Projects from './projects/Projects.jsx';
import Contact from './contact/Contact.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Project/>
        <Contact/>
      </div>
    );
  }
}

export default App;
