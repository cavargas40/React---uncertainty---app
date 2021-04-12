"use strict";

console.log("app.js is running");

var app = {
  title: "Uncertain App",
  subtitle: "Put your life in the hands of a laptop"
};

// JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

// Create a template Two var JSX expression
// div
//  h1 -> Carlos Vargas
//  p  -> age: 29
//  p  -> location: Bogota
//  Render templateTwo instead of people

var user = {
  name: "Carlos",
  age: 29,
  location: "BogotaF"
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
