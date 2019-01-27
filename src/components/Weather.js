import React from "react";

const Weather = props => (
  <div className="weather__info">
    {/*if city and country are true when button is pressed then display Location etc for others}*/}
    {props.city && props.country && (
      <p className="weather__key">
        Location:
        <span className="weather__value">
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {props.temperature && (
      <p className="weather__key">
        Temperature: <span className="weather__value">{props.temperature}</span>
      </p>
    )}
    {props.humidity && (
      <p className="weather__key">
        Humidity: <span className="weather__value">{props.humidity}</span>
      </p>
    )}
    {props.description && (
      <p className="weather__key">
        Conditions: <span className="weather__value">{props.description}</span>
      </p>
    )}
    {props.error && <p className="weather__error">{props.error}</p>}
  </div>
);

export default Weather;

//this is a stateless componnet. So we do not need to have it as a class. We can create a const with an arrow function and then our JSX.
// since it is stateless we do not use the this keyword. Instead we will pass our props.
//if you are only returning a single element you can get rid of the return statement --which we are here. the only element is our 1 div --do not think of the multiple props as elements
//
