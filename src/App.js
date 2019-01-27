//main file --wrapper component that will contain all components

import React from "react"; //import react object from react package that lives in package.json
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "b862380e4c6ec3d1f3063b26e8c8e259";
//initialize component
class App extends React.Component {
  //inital state
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  //api call using async and await
  getWeather = async e => {
    //prevents the re-rendering of the page
    e.preventDefault();

    //city and country are using the name attribute in Form comp. to grab the value of whatever the user inputs.In api call we dynamically changed the hard coded city and country that was previously there
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`
    );

    //convert response to JSON format - converts it to a redable format that any language can understand
    const data = await api_call.json();

    //making a check that if city and country render true then display. --so user must type something in
    if (city && country) {
      // console.log(data);
      //after initalizing state we can update the value by using our weather object in our console and dot notation to tell it where to grab the info from.
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      // this is our erro. we set everything back to undefined because we don't need to look for the data since the user has not entered a city or country
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter these values."
      });
    }
  };
  //displays component and returns JSX
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>

                <div className="col-xs-7 form-container">
                  {/* props are like html attributes. can be named anything. we named it
        getWeather. "this" (refers to App component. we are setting up a prop
        and setting its value to the getWeather function */}
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

/* 
STATE: 
is an object that lives within a component that is responsible for keeping track of changing data within a component. That change could be a form submit, user clicking button etc */
