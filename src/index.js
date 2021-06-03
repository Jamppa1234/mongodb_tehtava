import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';


// BrowserRouter-komponentin tulee sisältää kaikki sovelluksen  
// komponentit, missä hyödynnetään React Router DOM-paketin 
// toiminnallisuutta. Täten BrowserRouter-komponentti on
// suoraan ensimmäinen alikomponentti sovelluksen 
// juurikomponentille(App-komponentti)ja BrowserRouter-komponentin 
// sisälle rakennetaan koko sovelluksen komponenttipuu.

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>, document.getElementById('root'));

