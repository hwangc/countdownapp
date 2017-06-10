// countdownchamp

import React from 'react'; // get the all library from react
import ReactDOM from 'react-dom'; // get the all library from react-dom which let the code be displayed on browsers
import App from './App';
import Countdown from './Countdown';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

ReactDOM.render(
  <Countdown/>,
  document.getElementById('countdown')
);
