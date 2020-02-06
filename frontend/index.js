import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DomContentLoaded',() => {
     let store;
     store = configureStore({})
     const root = document.getElementById('root');
     ReactDom.render(<Root store={store}/>, root);
})