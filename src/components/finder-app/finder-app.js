import React, { Component } from 'react';
import { BrowserRouter as Router,Route,NavLink, Switch } from 'react-router-dom';

// import { PrimaryContent }  from './main/main-content/main-content.js';

import { Intro}  from './main/main-content/intro/intro.js';
import { Form }  from './main/main-content/form/form.js';
import { FilmSeriesInfo }  from './main/main-content/definitions/__definitions__film-series-info/definitions__film-series-info.js';
import { FilmInfo }  from './main/main-content/definitions/__definitions__film-info/definitions__film-info.js';
import { RegonInfo }  from './main/main-content/definitions/__definitions__regon-info/definitions__regon-info.js';
import { NoMatch }  from './main/main-content/no-match/no-match.js';
import { NavBottom }  from './main/main__nav-bottom/main__nav-bottom.js';

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
              {location.pathname==="/"?<header className="header"></header>:<Header toggleHeaderLogo={this.toggleHeaderLogo}></Header> }
              <section>
                <div className="main">
                  <Switch>
                    <Route exact path="/" component={Intro} toggleHeaderLogo={this.toggleHeaderLogo.bind(this)}/>
                    <Route exact path="/form" component={Form}/>
                    <Route exact path="/filmInfo" component={FilmInfo}/>
                    <Route exact path="/filmSeriesInfo" component={FilmSeriesInfo}/>
                    <Route exact path="/regonInfo" component={RegonInfo}/>
                    <Route component={NoMatch}/>
                  </Switch>
                <NavBottom/>
                </div>
              </section>
              <Footer/>
          </div>
      </Router>

    );
  }
}
