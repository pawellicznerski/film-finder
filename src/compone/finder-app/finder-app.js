import React, { Component } from 'react';
import { BrowserRouter as Router,Route,NavLink, Switch } from 'react-router-dom';

import { PrimaryContent }  from './main/primary-content/primary-content.js';

import { Intro, Form }  from './main/main.js';
import { NipInfo }  from './main/primary-content/definitions/__definitions__nip-info/definitions__nip-info.js';
import { KrsInfo }  from './main/primary-content/definitions/__definitions__krs-info/definitions__krs-info.js';
import { RegonInfo }  from './main/primary-content/definitions/__definitions__regon-info/definitions__regon-info.js';
import { NavBottom }  from './main/nav-bottom/nav-bottom.js';

import { Footer }  from './footer/footer.js';

import { Header }  from './header/header.js';



class FinderApp extends Component {
  render() {
    return (
      <Router history={history}>
          <div className="finder-app">
            <Header/>
            <PrimaryContent>
                <Switch>
                  <Route exact path="/" component={Intro}/>
                  <Route exact path="/form" component={Form}/>
                  <Route exact path="/krsInfo" component={KrsInfo}/>
                  <Route exact path="/nipInfo" component={NipInfo}/>
                  <Route exact path="/regonInfo" component={RegonInfo}/>
                  <Route component={NoMatch}/>
                </Switch>
            </PrimaryContent>
            <NavBottom/>
            <Footer/>
          </div>
      </Router>
    );
  }
}

export default FinderApp;
