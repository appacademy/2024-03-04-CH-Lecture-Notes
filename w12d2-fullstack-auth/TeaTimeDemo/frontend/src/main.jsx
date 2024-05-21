import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import configureStore from './store';
import { receiveTea, receiveTeas, removeTea, fetchAllTeas, createTea } from './store/teaReducer';
import { Provider } from 'react-redux';

import * as TeaAPIUtil from './util/tea_api_util';
import { restoreSession } from './store/csrf';
import { createUser, loginUser, logoutUser } from './store/usersReducer';

// const initialState = {
//   teas: {
//     1: {
//       id: 1, flavor: 'green', price: 3.00
//     }
//   }
// };

const initializeApp = () => {
  let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  let initialState = {};

  if (currentUser) {
    initialState = {
      users: {
        [currentUser.id]: currentUser
      }
    }
  }

  const store = configureStore(initialState);
  
  window.store = store;
  window.receiveTea = receiveTea;
  window.receiveTeas = receiveTeas;
  window.removeTea = removeTea;
  window.TeaAPIUtil = TeaAPIUtil;
  window.fetchAllTeas = fetchAllTeas;
  window.createTea = createTea;
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;
  window.createUser = createUser;

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

restoreSession().then(initializeApp);
