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
    console.log(this.state.value);
    event.preventDefault();
    const inputValue = this.state.value;
    const validateInput = this.validateInput(inputValue);
    if (validateInput) {
        this.setState({ error: validateInput });
        return;
    }
    this.setState({
      error: null,
      value:''
     });
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value);

  }
  validateInput(inputValue) {
      if (!inputValue) {
          return 'Please enter a inputValue.';
      // } else if (_.find(this.props.todos, todo => todo?todo.inputValue === inputValue:null)) {
      //     return 'Task already exists.';
      // } else {
      //     return null;
      }
  }
  render() {
    return (
      <MainContent>
        <div className="main-content">
          <div className="main-content__form-container">

            <form onSubmit={this.handleSubmit.bind(this)} className="main-content__form-container__form">
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
