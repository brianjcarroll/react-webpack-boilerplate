/*
 * This is your main JavaScript file, which is bundled in the build.
 * Make sure to require or import all other JS and CSS files from src here.
 */

if (module.hot) {
  module.hot.accept();
}

require('../styles/site.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const NewReactApp = {
  init() {
    ReactDOM.render(<App />, document.getElementById('app'));
  },
};

if (
  document.readyState === 'complete' ||
  document.readyState === 'interactive' ||
  document.readyState === 'loaded'
) {
  NewReactApp.init();
} else {
  document.addEventListener('DOMContentLoaded', NewReactApp.init);
}
