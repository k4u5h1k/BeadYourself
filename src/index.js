import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './routes/Routes';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hydrate } from "./components/slices/LoginSlice";
import store from './store';

const updateStateFromLocalStorage = () => {
  try { 
    const persistedState = localStorage.getItem('reduxState') 
    if (persistedState) 
      return JSON.parse(persistedState)
  }
  catch (e){ 
    console.log(e)
  }
}

const newState = updateStateFromLocalStorage()
if(newState){
  store.dispatch(hydrate(newState))
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
