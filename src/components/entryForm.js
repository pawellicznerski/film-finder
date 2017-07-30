import React, { Component }  from 'react';


export class FillInForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
      isBlocking: false,
      login: '',
      email: '',
      weight: '',
      height: '',
      yourExperience:'',
      emptyyourExperienceFieldWarning:"",
      trainingType: '',
      trainingTypeSuggestion: 0,
      dateStart: '',
      emptydateStartFieldWarning:"",
      dateSuggestion:1,
      dateEnd: '',
      emptydateEndFieldWarning:"",
      renderNotEnoughTimeToPrepare: false,
      numberOfTrainingDays:"22",
      renderPromptNumberOfDays: false,
      numberOfChosenTrainingWeeks:'0',
      renderAreYouSureToGoToTraining: false,
      renderMainWarning:false,
      maxKm:"300"
    };
    this.returnToMenu = this.returnToMenu.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRegistrationData = this.handleRegistrationData.bind(this);
} //props end

handleRegistrationData =(e)=>{
  e.preventDefault();
  const target = e.target;
  console.log("handleRegistrationData");
  for (var i = 0; i <= (target.length-1); i++) {
    if(target[i].value ===""){
      const name = target[i].name;
      const nameWarning = `empty${name}FieldWarning`;
      const warningString = "Wypełnij puste pole";
      this.setState({
         [nameWarning]:[warningString],
         renderMainWarning:true,
       });
    }
  }
  this.handleloadingTrainingPlan()
}

handleloadingTrainingPlan=()=>{
  this.handleYourExperience();
  this.handleDates();
}

handleYourExperience=()=>{
  if(isNaN(this.state.yourExperience)){
    this.setState({
      emptyyourExperienceFieldWarning: "musisz wybrac jedną z opcji",
      renderMainWarning:true,
    });
   }
}


handleDates=()=>{
  const firstDate = new Date(this.state.dateStart);
  const secondDate = new Date(this.state.dateEnd);
  console.log("dotarło do handle dates");
    if(secondDate<=firstDate ) {
      this.handleIfWrongDate();
    } else if(this.state.renderMainWarning){
      return false;
    } else if(secondDate>firstDate ) {
      const {suggestedValues} = stringsRenderingSuggestions;
      const numberOfTrainingDays2 = (((secondDate-firstDate)+86400000)/86400000);
      this.setState({
        numberOfTrainingDays: numberOfTrainingDays2,
        emptydateStartFieldWarning: "",
        emptydateEndFieldWarning: "",
       });
      if(Math.floor(numberOfTrainingDays2/7) < suggestedValues[this.state.yourExperience][this.state.dateSuggestion]){
         this.setState({
           renderNotEnoughTimeToPrepare: true,
           isBlocking: false,
          });
        window.addEventListener('scroll', this.scrollBlocker);
      } else {
        this.setState({
          isBlocking: false,
          renderAreYouSureToGoToTraining: true,
         });
         window.addEventListener('scroll', this.scrollBlocker);
      }
    }
}
scrollBlocker=(e)=>{
  e.preventDefault();
  window.scrollTo(0,0);
}

handleIfWrongDate=()=>{
  console.log("wrong - druga data jest wczesniejsza");
  this.setState({
    emptydateStartFieldWarning: "druga data nie może być starsza lub taka sam jak pierwsza",
    emptydateEndFieldWarning: "druga data nie może być starsza lub taka sam jak pierwsza",
    renderMainWarning:true,
   });
}//end of handleIfWrongDate


handleDateOnFocus =(e)=>{
  e.preventDefault();
  this.loopForMainWarning();
  this.setState({
    emptydateStartFieldWarning: "",
    emptydateEndFieldWarning: "",
    numberOfChosenTrainingWeeks: "",
   });
   this.loopForMainWarning();
}//end of focus function

loopForMainWarning=()=>{
  //part resposible for rendering main warning in the form
  const dataFieldsNames =[this.state.emptyyourExperienceFieldWarning,this.state.emptyloginFieldWarning,this.state.emptyemailFieldWarning,this.state.emptyweightFieldWarning,this.state.emptyheightFieldWarning,this.state.emptytrainingTypeFieldWarning,this.state.emptydateStartFieldWarning,this.state.emptydateEndFieldWarning];

  for (var i = 0; i < dataFieldsNames.length; i++) {
    console.log(dataFieldsNames[i]);
    if(dataFieldsNames[i]){
      this.setState({
        renderMainWarning:true,
      })
      console.log(dataFieldsNames[i]);
      break;
    } else (
      this.setState({
        renderMainWarning:false,
      })
    )
  }//end of loop
}


handleOnBlur =(e)=>{
  e.preventDefault();
  const name = e.target.name;
  if(name==="login"){
    const blurredFieldData = this.state.login;
    const basicDataFormat = /(?=.*\d)(?=.*[A-Za-z]).{4,15}/;
    const currentWarningBlurText = "Login: 4-15 znaków, min. 1 litera i liczba" ;
    const currentFetchWarningBlurText = "Taki login już istnieje. Podaj inny." ;
    this.handleValidation(name,blurredFieldData,basicDataFormat,currentWarningBlurText,currentFetchWarningBlurText);
  } else if(name==="email"){
    const blurredFieldData = this.state.email;
    const basicDataFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const currentWarningBlurText = stringsFillInForm.emailFormatWarning ;
    const currentFetchWarningBlurText = "Taki email już istnieje. Podaj inny." ;
    this.handleValidation(name,blurredFieldData,basicDataFormat,currentWarningBlurText,currentFetchWarningBlurText);
  } else {
    console.log("złasnie zblurowałeś coś poza login i email");
    console.log(new Date().toJSON().slice(0,10));
    console.log(this.state.dateEnd);
  }
}//end of blur function

handleValidation=(name,blurredFieldData,basicDataFormat,currentWarningBlurText,currentFetchWarningBlurText)=>{
  if(blurredFieldData===""){
    const nameWarning = `empty${name}FieldWarning`;
    this.setState({
      [nameWarning]: `Wpisz ${name}`,
    })
    return false;
  } else if (!basicDataFormat.test(blurredFieldData)) {
    const nameWarning = `empty${name}FieldWarning`;
    this.setState({
      [nameWarning]: currentWarningBlurText,
      renderMainWarning:true,
    })
    return false;
  } else {
    fetch(`http://localhost:3000/people?${name}=${blurredFieldData}`).then(resp => resp.json())
      .then(data => {
        if(data.length!==0){
          // console.log(name);
          // console.log(data);
          // console.log(data.length);
          // console.log("jest w bazie");
          const nameWarning = `empty${name}FieldWarning`;
          this.setState({
            [nameWarning]: currentFetchWarningBlurText,
            renderMainWarning:true,
          })
        } else if (data.length===0){
          console.log("nie ma w bazie");
        }
      });
  }
}; //end of handleValidation

handleOnFocusLogin=(e)=>{
  e.preventDefault();
  this.setState({
    emptyloginFieldWarning: "",
   });
   this.loopForMainWarning();
}

handleOnFocusEmail=(e)=>{
  e.preventDefault();
  this.setState({
    emptyemailFieldWarning: "",
   });
   this.loopForMainWarning();
}

//function which handles all input changes in the form
handleInputChange =(e)=>{
  // e.preventDefault();
  const target = e.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;//potrzebne w razie dolączenia checkbox-a
  const name = target.name;
  const nameWarning = `empty${name}FieldWarning`;

  this.setState({
     [name]: value,
     [nameWarning]:'',
     isBlocking: true,
   });
   this.loopForMainWarning();
} //end of handleInputChange

changeSuggestion=(e)=>{
  this.setState({
    emptyyourExperienceFieldWarning: "",
    renderMainWarning:false,
  });
  this.loopForMainWarning();
   if(e.target.id === 'input-1') {
    this.setState({
      yourExperience: 0,
      maxKm:stringsRenderingSuggestions.suggestedValues[0][0],
    });
  } else if(e.target.id === 'input-2') {
    this.setState({
      yourExperience: 1,
      maxKm:stringsRenderingSuggestions.suggestedValues[1][0],
    });
  } else{
    this.setState({
      yourExperience: 2,
      maxKm:stringsRenderingSuggestions.suggestedValues[2][0],
    });
  }
}


//handles btn which return to the home page
returnToMenu=(e)=>{
  e.preventDefault();
  this.props.history.push('/');
}//end of returnToMenu

returnToFillInForm=()=>{
  this.setState({
    renderNotEnoughTimeToPrepare: false,
    renderAreYouSureToGoToTraining: false,
    renderMainWarning:false,
   });
   window.removeEventListener('scroll', this.scrollBlocker);
} //end of returnToFillInForm

loadingTrainingPlan=()=>{
  this.setState({
    renderNotEnoughTimeToPrepare: false,
    renderAreYouSureToGoToTraining: false,
   });
   window.removeEventListener('scroll', this.scrollBlocker);
   const loadingPlanLogin= this.state.login;
   this.props.history.push({pathname: `/nowekonto/trainingPlan/${loadingPlanLogin}`,
     state: {
       login:this.state.login,
       email:this.state.email,
       weight:this.state.weight,
       height:this.state.height,
       trainingType:this.state.trainingType,
       dateStart:this.state.dateStart,
       dateEnd:this.state.dateEnd,
       numberOfTrainingDays:this.state.numberOfTrainingDays,
       newData:true,
     },
   });
} //end of loadingTrainingPlan

showNumberOfWeeks=(e)=>{
  e.preventDefault();
  const firstDate = new Date(this.state.dateStart);
  const secondDate = new Date(this.state.dateEnd);
  const numberOfTrainingDays = ((secondDate-firstDate)/86400000);
  const numberOfChosenTrainingWeeks = Math.floor(numberOfTrainingDays/7)

  if(secondDate<=firstDate||isNaN(numberOfChosenTrainingWeeks)) {
    this.setState({
      emptydateStartFieldWarning: "obie daty musza być wypełnione",
      emptydateEndFieldWarning: "obie daty musza być wypełnione",
      renderMainWarning:true,
     })
  } else {
    this.setState({
      renderPromptNumberOfDays: true,
      numberOfChosenTrainingWeeks: numberOfChosenTrainingWeeks,
     });
  }
}// end of showNumberOfWeeks


render(){
    return (
      <div id="all-cnt" className="col-12">
        <Prompt when={this.state.isBlocking} message={"Niekóre pola sa wypełnione, czy na pewno chcesz wyjść?"}/>

          <form onSubmit={this.handleRegistrationData}>
            <div className="inputs-cnts">
              <p className="descr-field">NIP/KRS/REGON</p>
              <label>
                <input
                  type="text"
                  value={this.state.login}
                  placeholder="Wpisz imie"
                  onChange={this.handleInputChange}
                  onBlur={this.handleOnBlur}
                  onFocus={this.handleOnFocusLogin}
                  title="Login musi zawierać między 4 a 15 znaków, chociaż jedną literę i liczbę"
                  name="login"
                />
              </label>
              <p className={this.state.emptyloginFieldWarning?"single-down-error-FIF-active":"single-down-error-FIF-nonactive"}>{this.state.emptyloginFieldWarning}</p>
            </div>
              <button id="render-plan-btn" type="submit">Pobierz dane</button>
          </form>

      </div>
    )
  }//end of render
}//registration form end
