import { createStore, combineReducers } from 'redux';
import contactsReducer from '../reducers/contactsReducer';
import itemsReducer from '../reducers/itemsReducer';


export default () => {
  const store = createStore(combineReducers({
    contacts : contactsReducer,
    items : itemsReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

  return store;
}
