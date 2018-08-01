import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import Routes from './views/routes'
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from 'react-router-dom'

import { navConfig } from './router/config'
import Header from './components/header/header'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="content" style={{paddingTop: '2rem'}}>
            <Routes />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
