import React, { Component } from 'react';
import {CacheProxy} from './cacheProxy';
import { MainContent } from './../main-content';
import _ from "lodash";

 class SearchedList extends React.Component {
    renderItems() {
        // const props = _.omit(this.props, 'todos');

        // return _.map(this.props.todos, (todo, index) => todo?<TodosListItem id={todo.id} key={index} {...todo} {...props} />: null);
    }

    render() {
        return (
            <div className="main-content__form-container__searched-list">
                <ul className="main-content__form-container__searched-list__item">
                    {this.renderItems()}
                </ul>
            </div>
        );
    }
}


export class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      selectValue:"notSpecified",
      error:"",

      filmTitle:"",
      selectType:'movie',
      typeOfApiSpecuficAction:'',
      typeOfApiMainAction:'',
    }
  }
  renderError() {
      if (!this.state.error) { return null; }
      return <div className="main-content__form-container__error">{this.state.error}</div>;
  }
  handleSubmit(event){
    // console.log(this.state.value);
    event.preventDefault();
    const inputValue = this.state.filmTitle;
    const validateInputText = this.validateInputText(inputValue);
    if (validateInputText) {
        this.setState({ error: validateInputText });
        return;
    }
    this.setState({
      error: null,
      filmTitle:'',
      selectType:{}
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
    console.log(this.state.selectType);
  }

  handleLoadingData(apiAddress){
      // CacheProxy.get(`http://api/Company?CompanyId=${this.state.value}`).then(data => {
      //   this.setState({newCity: data})
      //   console.log(data);
      //   })

    // druga strona
    //https://api.themoviedb.org/3/discover/tv?api_key=d609d4130667346ea048e134c734468c&sort_by=vote_count.desc&page=2

      fetch(apiAddress).then(resp => resp.json())
        .then(data => {
          if(data.length!==0){
            console.log("jest w bazie:",data);

          } else if (data.length===0){
            console.log("nie ma w bazie");
          }
        });

  }
  handleApiAddress(){
    var apiKey = "api_key=d609d4130667346ea048e134c734468c";
    if(this.state.selectValue==="notSpecified"){
      return `https://api.themoviedb.org/3/search/${this.state.selectType}?${apiKey}&query=${this.state.filmTitle}`;
    } else if(this.state.selectValue==="currentlyMostPopular"){
      return `https://api.themoviedb.org/3/discover/${this.state.selectType}?${apiKey}&sort_by=popularity.desc`;
    } else if(this.state.selectValue==="allTimeMostPopular"){
      return `https://api.themoviedb.org/3/discover/${this.state.selectType}?${apiKey}&sort_by=vote_count.desc`;
    }
  }

  validateInputText(inputValue) {
    console.log(inputValue);
      if (!inputValue){
        return 'Wpisz film, currentlyMostPopFilm lub TVserial';
        this.handleCheckingInputFormat()
      } else{
        const apiAddress = this.handleApiAddress();
        this.handleLoadingData(apiAddress);
      }
  }

  render() {
    return (
      <MainContent>
        <div className="main-content">
          <div className="main-content__form-container">

            <form
              onSubmit={this.handleSubmit.bind(this)}
              className="main-content__form-container__form">
              <input
                type="submit"
                value="Find"
                className="main-content__form-container__form__button"/>

              <label>
                <div>
                  <h5>Film</h5>
                  <input
                    type="radio"
                    name="selectType"
                    value="movie"
                    onClick={this.handleChange.bind(this)}
                    checked={this.state.selectType === 'movie'}/>

                  <h5>TV serial</h5>
                  <input
                    type="radio"
                    name="selectType"
                    value="tv"
                    onClick={this.handleChange.bind(this)}
                    checked={this.state.selectType === 'tv'}/>
                </div>
              </label>

              <label className="main-content__form-container__select">
                <select
                  name="selectValue"
                  value={this.state.selectValue}
                  onChange={this.handleChange.bind(this)}>

                  <option value="notSpecified" selected>not specified</option>
                  <option value="currentlyMostPopular">Currently most popular</option>
                  <option value="allTimeMostPopular">All time most popular</option>

                </select>
              </label>
              <label className="main-content__form-container__form__label">
              :
                <input
                  type="text"
                  name="filmTitle"
                  className="main-content__form-container__form__input"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.filmTitle}
                   />
              </label>
            </form>

            {this.renderError()}

            <SearchedList/>

          </div>
        </div>
      </MainContent>
    );
  }
}
