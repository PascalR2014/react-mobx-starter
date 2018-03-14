import React, { Component } from 'react';
import 'ant-design-pro/dist/ant-design-pro.min.css';
import './App.css';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          {/* add more routes .. <Route exact path="/login" component={Login} /> */} 
        </Switch>
    );
  }
}

export default App;
