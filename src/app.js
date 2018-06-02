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

const saman = store.dispatch(addContact({firstName: 'saman', lastName:'rajabnejad', contactType:'customer'}));
const sina = store.dispatch(addContact({firstName: 'sina', lastName:'rajabnejad', contactType:'customer'}));
// store.dispatch(editContact(saman.contact.id, {firstName: 'samane'}))
const shirt = store.dispatch(addItem({name: 'shirt', itemType:'goods', unit:'number'}));
store.dispatch(editItem(shirt.item.id, {name: 'jaket', saleInformation:{rate: 1000}}));


const state = store.getState();
console.log(state);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
