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
      selectValue:"film",
      error:"",

      filmTitle:"",
      selectType:'',
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
    this.setState({error: null, filmTitle:'' });
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

  handleLoadingData = () => {
      // CacheProxy.get(`http://api/Company?CompanyId=${this.state.value}`).then(data => {
      //   this.setState({newCity: data})
      //   console.log(data);
      //   })

      const apiKey = "_key=d609d4130667346ea048e134c734468c";
      const filmFormat =`https://api.themoviedb.org/3/search/${this.state.selectType}?${apiKey}&query=${this.state.filmTitle}`;

      // tytuł filmu:
      // `https://api.themoviedb.org/3/search/movie?api_key=d609d4130667346ea048e134c734468c&query=breaking bad`

      // tytył serialu
      // `https://api.themoviedb.org/3/search/tv?api_key=d609d4130667346ea048e134c734468c&query=breaking bad`

      // obecnie najpopularniejszy
      // `https://api.themoviedb.org/3/discover/movie?api_key=d609d4130667346ea048e134c734468c&sort_by=popularity.desc`
// `https://api.themoviedb.org/3/discover/tv?api_key=d609d4130667346ea048e134c734468c&sort_by=vote_average.desc&sort_by=vote_count.desc`

    // druga strona
    //https://api.themoviedb.org/3/discover/tv?api_key=d609d4130667346ea048e134c734468c&sort_by=vote_count.desc&page=2

     // klucz:
      // api_key=d609d4130667346ea048e134c734468c


      fetch(`https://api.themoviedb.org/3/search/tv?api_key=d609d4130667346ea048e134c734468c&query=chłopaki`).then(resp => resp.json())
        .then(data => {
          if(data.length!==0){
            console.log("jest w bazie:",data);

          } else if (data.length===0){
            console.log("nie ma w bazie");
          }
        });

  }
  handleCheckingInputFormat(){
    // const basicfilmFormat =/(^([A-Z]{2,3})?\d{3}-?\d{3}-?\d{2}-?\d{2}$)|(^([A-Z]{2,3})?\d{3}-?\d{2}-?\d{2}-?\d{3}$)/;
    // const basicTVserialFormat =/^\d{9}$/;
    // const basiccurrentlyMostPopFilmFormat =/^\d{10}$/;
    const apiKey = "_key=d609d4130667346ea048e134c734468c";

    const filmFormat =`https://api.themoviedb.org/3/search/movie?${apiKey}&query=${this.state.filmTitle}`;
    const TVserialFormat =/^\d{9}$/;
    const currentlyMostPopFilmFormat =/^\d{10}$/;

    // var currentOption='';
    // if(this.state.selectValue==='film')currentOption=basicfilmFormat;
    // else if(this.state.selectValue==='TVserial')currentOption=basicTVserialFormat;
    // else if(this.state.selectValue==='currentlyMostPopFilm')currentOption=basiccurrentlyMostPopFilmFormat;
    //
    // if(currentOption.test(this.state.value)){
    //   return true;
    // } else {
    //   console.log(this.state.value);
    //   return false;
    // }
  }

  validateInputText(inputValue) {
    console.log(inputValue);
      if (!inputValue)
          return 'Wpisz film, currentlyMostPopFilm lub TVserial';
      // } else if (!this.handleCheckingInputFormat()) {
      //   console.log(this.handleCheckingInputFormat());
      //     return 'Wpisz prawidłowy film, currentlyMostPopFilm lub TVserial';
      // } else {
      //   console.log(this.handleCheckingInputFormat());
      //   this.handleLoadingData();
      // }
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

              <label for="selectType">
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

                  <option value="currentlyMostPop">Currently most popular</option>
                  <option value="AllTimeMostPop">All time most popular</option>

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
