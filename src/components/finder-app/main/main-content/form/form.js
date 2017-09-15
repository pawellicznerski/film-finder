import React, { Component } from 'react';
import { MainContent } from './../main-content';
import { SearchedList } from './__form__searched-list/form__searched-list';
import _ from "lodash";
import { Header } from './../__header/header';

export class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      selectValue:"notSpecified",
      error:"",

      filmTitle:"",
      selectType:'movie',

      typeIsSelected:false,

      currentListArr:'',
      currentListArrIsFull:false,
    }
  }
// console.log();
  renderError() {
      if (!this.state.error) { return null; }
      return <div className="form__form-container__error">{this.state.error}</div>;
  }

  handleSubmit(event){
    event.preventDefault();
    const validateInputText = this.state.selectValue==="notSpecified"? this.validateInputText():'';
    if (validateInputText) {
        this.setState({ error: validateInputText });
        return;
    }
    if (!this.state.typeIsSelected) {
        this.setState({ error: "You have to select a type" });
        return;
    }
    this.setState({
      error: null,
      filmTitle:'',
      selectValue:"notSpecified",
     });
     const apiAddress = this.handleApiAddress();
     this.handleLoadingData(apiAddress)
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleLoadingData(apiAddress){
    // druga strona
    //https://api.themoviedb.org/3/discover/tv?api_key=d609d4130667346ea048e134c734468c&sort_by=vote_count.desc&page=2
      fetch(apiAddress).then(resp => resp.json())
        .then(data => {
          if (data.length===0||data.total_results===0){
            this.setState({
              error: "Sorry, there is no such film in our base",
              currentListArrIsFull:false,
             });
          // console.log("nie ma w bazie");
          } else if(data.length!==0){
            var listArr=[];
            // console.log(data);
            for (var i = 0; i < data.results.length; i++) {
              listArr.push({
                title: this.state.selectType==='movie'?data.results[i].title:data.results[i].name,
                release_date: this.state.selectType==='movie'?data.results[i].release_date.substring(0, 4):data.results[i].first_air_date.substring(0, 4),
                original_language:data.results[i].original_language,
                vote_average:data.results[i].vote_average,
                original_title: this.state.selectType==='movie'?data.results[i].original_title:data.results[i].original_name,
              })
            }
            this.setState({
              error: "",
              currentListArr:listArr,
              currentListArrIsFull:true
            })
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

  validateInputText() {
      if (!this.state.filmTitle){
        return 'Type in a title or choose one of the filters';
      } else{
      }
  }

  handleFocus(){
    this.setState({
      error: '',
      typeIsSelected:'true'
    });
  }

  render() {
    return (
      <MainContent>
        <Header/>
        <div className="form">
          <div className="form__form-container">
            <h2 className="form__form-container__text">I'm looking for a...</h2>
            <form
              onSubmit={this.handleSubmit.bind(this)}
              className="form__form-container__form">
              <label className="form__form-container__form__label-select">Type:</label>
              <div className="form__form-container__form__select">
                <label className="form__form-container__form__select__text">Film</label>
                <input
                  className="form__form-container__form__select__input"
                  type="radio"
                  name="selectType"
                  value="movie"
                  onChange={this.handleChange.bind(this)}
                  onFocus={this.handleFocus.bind(this)}
                  />

                <label className="form__form-container__form__select__text">TV serial</label>
                <input
                  className="form__form-container__form__select__input"
                  type="radio"
                  name="selectType"
                  value="tv"
                  onChange={this.handleChange.bind(this)}
                  onFocus={this.handleFocus.bind(this)}
                  />
              </div>

              <label className="form__form-container__form__option-text">
                Filter:</label>
              <select
                className="form__form-container__form__option"
                name="selectValue"
                value={this.state.selectValue}
                onChange={this.handleChange.bind(this)}>

                <option value="notSpecified" className="form__form-container__form__option__item">no filter</option>
                <option value="currentlyMostPopular" className="form__form-container__form__option__item">Currently most popular</option>
                <option value="allTimeMostPopular" className="form__form-container__form__option__item">All time most popular</option>
              </select>



              <label className="form__form-container__form__text-type">
                Title:</label>
                <input
                  type="text"
                  name="filmTitle"
                  className="form__form-container__form__text-input"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.filmTitle}
                   />

              <input
                type="submit"
                value="Find"
                className="form__form-container__form__button"/>
            </form>
            {this.renderError()}

            <SearchedList currentListArr={this.state.currentListArr} currentListArrIsFull={this.state.currentListArrIsFull}/>

          </div>{/*form*/}
        </div>{/*form__form-container*/}
      </MainContent>
    );
  }
}
