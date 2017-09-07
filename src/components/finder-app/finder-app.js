import React, { Component } from 'react';
import { BrowserRouter as Router,Route,NavLink, Switch } from 'react-router-dom';

import { PrimaryContent }  from './main/main-content/main-content.js';

import { Intro}  from './main/main-content/intro/intro.js';
import { Form }  from './main/main-content/form/form.js';
import { NipInfo }  from './main/main-content/definitions/__definitions__nip-info/definitions__nip-info.js';
import { KrsInfo }  from './main/main-content/definitions/__definitions__krs-info/definitions__krs-info.js';
import { RegonInfo }  from './main/main-content/definitions/__definitions__regon-info/definitions__regon-info.js';
import { NoMatch }  from './main/main-content/no-match/no-match.js';
import { NavBottom }  from './main/nav-bottom/nav-bottom.js';

import { Footer }  from './footer/footer.js';

import { Header }  from './header/header.js';

export class FinderApp extends Component {
  constructor(props){
    super(props);
    this.state={
      toggleShowLogo:false,
    }
  }
  toggleHeaderLogo(value){
    this.setState({toggleShowLogo:value,})
  }
  render() {
    return (
      <Router history={history}>
          <div className="finder-app">
              {location.pathname==="/"?<header className="header"></header>:<Header/> }
              <section>
                <div className="main">
                  <Switch>
                    <Route exact path="/" component={Intro} toggleHeaderLogo={this.toggleHeaderLogo.bind(this)}/>
                    <Route exact path="/form" component={Form}/>
                    <Route exact path="/krsInfo" component={KrsInfo}/>
                    <Route exact path="/nipInfo" component={NipInfo}/>
                    <Route exact path="/regonInfo" component={RegonInfo}/>
                    <Route component={NoMatch}/>
                  </Switch>
                </div>
              </section>
              <NavBottom/>
              <Footer/>
          </div>
      </Router>

    );
  }
}
