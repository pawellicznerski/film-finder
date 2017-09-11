import React, { Component } from 'react';
import {CacheProxy} from './cacheProxy';
import { MainContent } from './../main-content';

class Input extends Component {
  render() {
    return (
      <div className="main-content__form-container">
        {this.props.name}
        <div className="main-content__form-container__info">
          {this.props.inputValue}
        </div>
      </div>
    );
  }
}

export class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      value:"",
      selectValue:"NIP",
      error:"",

      name:"wswswsqwsqw qwsqwosoiqwjs qwospqwposkq qwpokspqowkps",
      street:"",
      streetNo:"w21w",
      postcode:"",
      city:"",
    }
  }
  renderError() {
      if (!this.state.error) { return null; }
      return <div className="main-content__form-container__error">{this.state.error}</div>;
  }
  handleSubmit(event){
    // console.log(this.state.value);
    event.preventDefault();
    const inputValue = this.state.value;
    const validateInputText = this.validateInputText(inputValue);
    if (validateInputText) {
        this.setState({ error: validateInputText });
        return;
    }
    this.setState({
      error: null,
      value:''
     });
     console.log(this.state.selectValue);

  }
  handleChange(event) {
    // this.setState({value: event.target.value});
    // console.log(this.state.value);

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  handleLoadingData = () => {
      // CacheProxy.get(`http://api/Company?CompanyId=${this.state.value}`).then(data => {
      //   this.setState({newCity: data})
      //   console.log(data);
      //   })
      // fetch(`http://api/Company?CompanyId=${this.state.value}`).then(resp => resp.json())
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d609d4130667346ea048e134c734468c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`).then(resp => resp.json())
        .then(data => {
          if(data.length!==0){
            console.log("jest w bazie:",data);

          } else if (data.length===0){
            console.log("nie ma w bazie");
          }
        });

  }
  handleCheckingInputFormat(){
    const basicNIPFormat =/(^([A-Z]{2,3})?\d{3}-?\d{3}-?\d{2}-?\d{2}$)|(^([A-Z]{2,3})?\d{3}-?\d{2}-?\d{2}-?\d{3}$)/;
    const basicREGONFormat =/^\d{9}$/;
    const basicKRSFormat =/^\d{10}$/;

    var currentOption='';
    if(this.state.selectValue==='NIP')currentOption=basicNIPFormat;
    else if(this.state.selectValue==='REGON')currentOption=basicREGONFormat;
    else if(this.state.selectValue==='KRS')currentOption=basicKRSFormat;

    if(currentOption.test(this.state.value)){
      return true;
    } else {
      console.log(this.state.value);
      return false;
    }
  }

  validateInputText(inputValue) {
    console.log(inputValue);
      if (!inputValue) {
          return 'Wpisz NIP, KRS lub REGON';
      } else if (!this.handleCheckingInputFormat()) {
        console.log(this.handleCheckingInputFormat());
          return 'Wpisz prawidłowy NIP, KRS lub REGON';
      } else {
        console.log(this.handleCheckingInputFormat());
        this.handleLoadingData();
      }
  }
  render() {
    return (
      <MainContent>
        <div className="main-content">
          <div className="main-content__form-container">

            <form onSubmit={this.handleSubmit.bind(this)} className="main-content__form-container__form">
              Wpisz
              <label className="main-content__form-container__select">
                <select name="selectValue" value={this.state.selectValue} onChange={this.handleChange.bind(this)}>
                  <option value="NIP">NIP</option>
                  <option value="REGON">REGON</option>
                  <option value="KRS">KRS</option>
                </select>
              </label>
              <label className="main-content__form-container__form__label">
              :
                <input
                  type="text"
                  name="value"
                  className="main-content__form-container__form__input"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.value}
                   />
              </label>
              <input type="submit" value="Szukaj"  className="main-content__form-container__form__button"/>
            </form>

            {this.renderError()}

            <Input inputValue={this.state.name} name="Nazwa:"></Input>
            <Input inputValue={this.state.street} name="Nazwa ulicy:"></Input>
            <Input inputValue={this.state.streetNo} name="Numer ulicy:"></Input>
            <Input inputValue={this.state.postcode} name="Kod pocztowy:"></Input>
            <Input inputValue={this.state.city} name="Miasto:"></Input>

          </div>
        </div>
      </MainContent>
    );
  }
}
