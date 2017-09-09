import React, { Component } from 'react';
import { MainContent } from './../main-content';

class Input extends Component {
  render() {
    return (
      <div className="main-content__form-container__data">
        {this.props.name}
        <div className="main-content__form-container__data__info">
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

      name:"wswswsqwsqw qwsqwosoiqwjs qwospqwposkq qwpokspqowkps",
      street:"",
      streetNo:"",
      postcode:"",
      city:"",
    }
  }
  handleSubmit(){

  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <MainContent>
        <div className="main-content">
          <div className="main-content__form-container">

            <form onSubmit={this.handleSubmit} className="main-content__form-container__form">
              <label className="main-content__form-container__form__label">
                Wpisz KRS lub NIP lub REGON:
                <input
                  type="text"
                  name="name"
                  className="main-content__form-container__form__input main-content__form-container__form__input_shorter-input"
                  onChange={this.handleChange.bind(this)}
                   />
              </label>
              <input type="submit" value="Szukaj"  className="main-content__form-container__form__button"/>
            </form>

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
