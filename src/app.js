console.log("app.js is running");

const app = {
  title: "Uncertain App",
  subtitle: "Put your life in the hands of a laptop",
};

// JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

// Create a template Two var JSX expression
// div
//  h1 -> Carlos Vargas
//  p  -> age: 29
//  p  -> location: Bogota
//  Render templateTwo instead of people

const user = {
  name: "Carlos",
  age: 29,
  location: "BogotaF",
};

const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
