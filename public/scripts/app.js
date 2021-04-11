console.log("app.js is running");

// JSX - JavaScript XML
// const template = <p>This is JSX form app.js!</p>;
const template = React.createElement(
    "h1",
    { id: "someid" },
    "Something New"
)
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
