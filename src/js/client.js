import React from 'react';
import ReactDOM from 'react-dom';
//import Layout from './components/Layout';
import Employee from './components/Employee';

const app = document.getElementById('app');

//ReactDOM.render(
//  <Layout
//    title="How cool are you on a scale from 1 to 10"
//    max="OFF THE HOOK!!!"
//    high="Awesome!"
//    medium="Mediocre..."
//    low="Loser."
//    min="Booh!"
//    sux="What the fuck?!"
//    />,
//  app
//);

ReactDOM.render(
  <Employee
    name="Kevin Østerkilde"
    job="Front-End Developer"
    email="keo@billetto.com"
    img="./assets/images/Kevin.png"
    gif="https://media.giphy.com/media/9fbYYzdf6BbQA/giphy.gif"
    gif="https://media.giphy.com/media/129rZZ3a4anp0Q/giphy.gif"
    />,
  kevin
);

ReactDOM.render(
  <Employee
    name="Gorjan Dimitrov"
    job="Growth Hacker"
    email="gd@billetto.dk"
    img="./assets/images/Gorjan.png"
    gif="https://media.giphy.com/media/9fbYYzdf6BbQA/giphy.gif"
    />,
  gorjan
);
