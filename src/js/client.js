import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

const app = document.getElementById('app');

ReactDOM.render(
  <Layout
    title="How cool are you on a scale from 1 to 10"
    max="OFF THE HOOK!"
    medium="Mediocre..."
    low="Loser."
    minus="What the fuck?!"
    />,
  app
);
