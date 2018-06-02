import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore.js';
import 'normalize.css/normalize.css';
import './styles/styles.sass';
import { addContact, removeContact, editContact } from './actions/contactsAction';
import { addItem, removeItem, editItem } from './actions/itemsActions';

const store = configureStore();


const state = store.getState();
console.log(state);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
