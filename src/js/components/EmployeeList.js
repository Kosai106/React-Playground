import React from 'react';
import ReactDOM from 'react-dom';
import Employee from './Employee';

export default class EmployeeList extends React.Component {
  render() {
    return(
      <div className="container text-center">
        <div className="row employeelist">
          <Employee
            name="Kevin Østerkilde"
            job="Front-End Developer"
            email="keo@billetto.com"
            img="./assets/images/Kevin.png"
            gif="https://media.giphy.com/media/9fbYYzdf6BbQA/giphy.gif"
            gif="https://media.giphy.com/media/129rZZ3a4anp0Q/giphy.gif"
          />
          <Employee
            name="Gorjan Dimitrov"
            job="Growth Hacker"
            email="gd@billetto.dk"
            img="./assets/images/Gorjan.png"
            gif="https://media.giphy.com/media/9fbYYzdf6BbQA/giphy.gif"
          />
          <Employee
            name="Sasha Bondareva"
            job="B2B Marketing Editor"
            email="sb@billetto.com"
            img="./assets/images/Sasha.png"
            gif="https://media.giphy.com/media/5xtDarnckdJfzSqLhW8/giphy.gif"
          />
          <Employee
            name="Anders Fink"
            job="CMO"
            email="af@billetto.com"
            img="./assets/images/Anders.png"
            gif="https://media.giphy.com/media/twOB11f03h78c/giphy.gif"
          />
        </div>
        <div className="row employeelist">
          <Employee
            name="Lasse Thomsen"
            job="Numbers"
            email="lt@billetto.dk"
            img="./assets/images/Lasse T.png"
            gif="https://media.giphy.com/media/5yLgoceFO3BdJW1zvFu/giphy.gif"
          />
          <Employee
            name="Claus Linde"
            job="Head of B2C Services"
            email="cl@billetto.com"
            img="./assets/images/Claus.png"
            gif="https://media.giphy.com/media/nIM0pmYCPZ11S/giphy.gif"
          />
          <Employee
            name="Matthew Pither"
            job="Support"
            email="mp@billetto.dk"
            img="./assets/images/Matthew.png"
            gif="https://media.giphy.com/media/5yLgoceFO3BdJW1zvFu/giphy.gif"
          />
          <Employee
            name="Mie Christiansen"
            job="Key Account Manager"
            email="mc@billetto.com"
            img="./assets/images/Mie.png"
            gif="https://media.giphy.com/media/nIM0pmYCPZ11S/giphy.gif"
          />
        </div>
      </div>
    );
  }
}
