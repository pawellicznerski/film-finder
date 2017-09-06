import React, { Component } from 'react';
import { BrowserRouter as Router,Route,NavLink, Switch } from 'react-router-dom';

import { PrimaryContent }  from './main/primary-content/primary-content.js';

import { Intro}  from './main/primary-content/intro/intro.js';
import { Form }  from './main/primary-content/form/form.js';
import { NipInfo }  from './main/primary-content/definitions/__definitions__nip-info/definitions__nip-info.js';
import { KrsInfo }  from './main/primary-content/definitions/__definitions__krs-info/definitions__krs-info.js';
import { RegonInfo }  from './main/primary-content/definitions/__definitions__regon-info/definitions__regon-info.js';
import { NoMatch }  from './main/primary-content/no-match/no-match.js';
// import { NavBottom }  from './main/nav-bottom/nav-bottom.js';

import { Footer }  from './footer/footer.js';

import { Header }  from './header/header.js';



export class FinderApp extends Component {
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
                <div className="main">
                  <Switch>
                    <Route exact path="/" component={Intro}/>
                    <Route exact path="/formularz" component={Form}/>
                    <Route exact path="/krsInfo" component={KrsInfo}/>
                    <Route exact path="/nipInfo" component={NipInfo}/>
                    <Route exact path="/regonInfo" component={RegonInfo}/>
                    <Route component={NoMatch}/>
                  </Switch>
                </div>
              </section>
              <nav>
                <ul className="footerCNT"  style={{ listStyleType: "none"}}>
                  <NavLink to="/formularz" style={{ textDecoration: 'none'}} ><li className="allfooterBTNs footerBTNfirst"><p>Znajdź firmę</p></li></NavLink>
                  <NavLink to="/krsInfo" style={{ textDecoration: 'none'}} ><li className="allfooterBTNs footerBTN2"><p>Co to jest KRS?</p></li></NavLink>
                  <NavLink to="/nipInfo" style={{ textDecoration: 'none'}} ><li className="allfooterBTNs footerBTN3"><p>Co to jest NIP?</p></li></NavLink>
                  <NavLink to="/regonInfo" style={{ textDecoration: 'none'}} ><li className="allfooterBTNs footerBTN4"><p>Co to jest REGON?</p></li></NavLink>
                </ul>
              </nav>
              <Footer/>
          </div>
        </div>
      </Router>

    );
  }
}
