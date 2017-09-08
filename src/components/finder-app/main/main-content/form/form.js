import React, { Component } from 'react';
import { MainContent } from './../main-content';

export class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      street:"",
      streetNo:"",
      postcode:"",
      city:"",
    }
  }
  handleSubmit(){

  }
  render() {
    return (
      <MainContent>
        <div className="main-content">
          <div className="main-content__form-container">

            <form onSubmit={this.handleSubmit} className="main-content__form-container__form">
              <label className="main-content__form-container__form__label">
                Wpisz KRS lub NIP lub REGON:
                <input type="number" name="name"  className="main-content__form-container__form__input" />
              </label>
              <input type="submit" value="Szukaj"  className="main-content__form-container__form__button"/>
            </form>

              <label className="main-content__form-container__form__label">
                Nazwa:
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  className="main-content__form-container__form__input main-content__form-container__form__input_wider-input" />
              </label>

              <label className="main-content__form-container__form__label">
                Nazwa ulicy:
                <input
                  type="text"
                  name="name"
                  value={this.state.street}
                  className="main-content__form-container__form__input main-content__form-container__form__input_wider-input" />
              </label>

              <label className="main-content__form-container__form__label">
                Numer ulicy:
                <input
                  type="text"
                  name="name"
                  value={this.state.streetNo}
                  className="main-content__form-container__form__input main-content__form-container__form__input_wider-input" />
              </label>

              <label className="main-content__form-container__form__label">
                Kod pocztowy:
                <input
                  type="text"
                  name="name"
                  value={this.state.postcode}
                  className="main-content__form-container__form__input main-content__form-container__form__input_wider-input" />
              </label>

              <label className="main-content__form-container__form__label">
                Miasto:
                <input
                  type="text"
                  name="name"
                  value={this.state.city}
                  className="main-content__form-container__form__input main-content__form-container__form__input_wider-input" />
              </label>
          </div>
        </div>
      </MainContent>
    );
  }
}
