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
              <nav className="navCNT col-4">
                <NavLink to="/" style={{ textDecoration: 'none'}} ><div className="menu-logo"><p>menu</p></div></NavLink>
                <NavLink to="/nip-info" style={{ textDecoration: 'none'}} ><div className=""><p>Co to jest NIP?</p></div></NavLink>
                <NavLink to="/krs-info" style={{ textDecoration: 'none' }} ><div className=""><p>Co to jest KRS?</p></div></NavLink>
                <NavLink to="/regon-info" style={{ textDecoration: 'none'}} ><div className=""><p>Co to jest REGON?</p></div></NavLink>
              </nav>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/nip-info" component={NipInfo}/>
                <Route exact path="/krs-info" component={KrsInfo}/>
                <Route exact path="/regon-info" component={RegonInfo}/>
                <Route component={NoMatch}/>
              </Switch>
              <footer>
              </footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
