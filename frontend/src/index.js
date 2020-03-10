import React from 'react';
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import App from './app'


// We render the App file using Browser ROuter from the react-router-dom module
// We append it to the main html file with the id 'root


render((
     <BrowserRouter>
          <App/>
     </BrowserRouter>
), document.getElementById('root')
)