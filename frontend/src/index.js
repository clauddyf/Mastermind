import React from 'react';
// import ReactDom from 'react-dom';
// import Root from './components/root';
// import configureStore from './store/store';
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import App from './app'

// document.addEventListener('DomContentLoaded',() => {
//      let store;
//      store = configureStore({})
//      const root = document.getElementById('root');
//      ReactDom.render(<Root store={store}/>, root);
// })

render((
     <BrowserRouter>
          <App/>
     </BrowserRouter>
), document.getElementById('root')
)