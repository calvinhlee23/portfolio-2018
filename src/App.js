import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';

import Header from './header/Header.jsx';
import Projects from './projects/Projects.jsx';
import Contact from './contact/Contact.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
          <Route component={Header}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
