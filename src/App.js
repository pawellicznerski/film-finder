import React, { Component } from 'react';
import { BrowserRouter as Router,Route,NavLink, Switch } from 'react-router-dom';
import './App.css';
import { Home }  from './components/home.js';
import { Form }  from './components/form.js';
import { NipInfo }  from './components/nipInfo.js';
import { KrsInfo }  from './components/krsInfo.js';
import { RegonInfo }  from './components/regonInfo.js';
import { NoMatch }  from './components/noMatch.js';



class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <div className="container">
              <nav>
                <div className="navCNT">
                  <NavLink to="/" style={{ textDecoration: 'none'}} ><div className="menu-logo"><p>menu</p></div></NavLink>
                </div>
              </nav>
              <section>
                <div className="mainSectionCNT">
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/formularz" component={Form}/>
                    <Route exact path="/krsInfo" component={KrsInfo}/>
                    <Route exact path="/nipInfo" component={NipInfo}/>
                    <Route exact path="/regonInfo" component={RegonInfo}/>
                    <Route component={NoMatch}/>
                  </Switch>
                </div>
              </section>
              <footer>
                <div className="footerCNT">
                  <NavLink to="/formularz" style={{ textDecoration: 'none'}} ><div className="allfooterBTNs footerBTN-1"><p>Idź do formularza</p></div></NavLink>
                  <NavLink to="/krsInfo" style={{ textDecoration: 'none'}} ><div className="allfooterBTNs footerBTN-2"><p>Co to jest KRS?</p></div></NavLink>
                  <NavLink to="/nipInfo" style={{ textDecoration: 'none'}} ><div className="allfooterBTNs footerBTN-3"><p>Co to jest NIP?</p></div></NavLink>
                  <NavLink to="/regonInfo" style={{ textDecoration: 'none'}} ><div className="allfooterBTNs footerBTN-4"><p>Co to jest REGON?</p></div></NavLink>
                </div>
                <div style={{x:0, y:0,width:"50px", height:"50px", backgroundColor:"red"}}></div>
              </footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
