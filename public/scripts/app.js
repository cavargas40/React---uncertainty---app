"use strict";

console.log("app.js is running");

var app = {
  title: "Uncertain App",
  subtitle: "Put your life in the hands of a laptop",
  options: ["One", "Two"]
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
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options && app.options.length > 0 ? "Here are your options" : "No options"
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

var count = 0;
var addOne = function addOne() {
  return console.log('addOne');
};
var minusOne = function minusOne() {
  return console.log('minusOne');
};;
var reset = function reset() {
  return console.log('reset');
};;

var someId = "myidhere";
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: reset },
    "Reset"
  )
);
// https://reactjs.org/docs/dom-elements.html

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
