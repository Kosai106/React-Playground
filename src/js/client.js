import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import EmployeeList from './components/EmployeeList';

const app = document.getElementById('app');

ReactDOM.render(
  <Layout
    title="How cool are you on a scale from 1 to 10"
    max="OFF THE HOOK!!!"
    high="Awesome!"
    medium="Mediocre..."
    low="Loser."
    min="Booh!"
    sux="What the fuck?!"
    />,
  app
);

ReactDOM.render(
  <EmployeeList />, app
);
