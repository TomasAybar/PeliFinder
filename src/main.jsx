import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

// redux
import { Provider } from 'react-redux';
import { configureStore as createStore } from '@reduxjs/toolkit';
import mainReducer from './redux/reducers/mainReducer';
const reduxStore = createStore({ reducer: mainReducer }); // creas la nube y le pasas el MAIN REDUCER

// react router dom
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={reduxStore}>

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Provider>
)
