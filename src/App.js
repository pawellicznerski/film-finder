import React, { Component } from 'react';
import { BrowserRouter as Router,Route,NavLink, Switch } from 'react-router-dom';
import './App.css';
import { Home }  from './components/home.js';
import { NipInfo }  from './components/nipInfo.js';
import { KrsInfo }  from './components/krsInfo.js';
import { RegonInfo }  from './components/regonInfo.js';
import { NoMatch }  from './components/noMatch.js';



class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <div className="container homeCNT">
              <nav className=" leftSection col-5">
                <div className="navCNT">
                  <NavLink to="/" style={{ textDecoration: 'none'}} ><div className="menu-logo"><p>menu</p></div></NavLink>
                </div>
                <div className="rightSection col-7">
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route component={NoMatch}/>
                  </Switch>
                </div>
              </nav>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
