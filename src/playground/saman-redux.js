import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
let selected = {}

const addproduct = ({
  name = '',
  price = 0,
} = {}) => ({
  type: 'ADD_PRODUCT',
  product: {
    id: uuid(),
    name,
    price
  }
});

const findProduct = (id) => ({
  type: "FIND_PRODUCT",
  id
})

const productsReducerdefault = []



const filtersReducerDefault = {
  price : '',
  date : 0
}

const filtersReducer = (state = filtersReducerDefault, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
const productsReducer = (state = productsReducerdefault, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return state.concat(action.product);
    case 'FIND_PRODUCT':
      return state.map((product) => {
        if(product.id === action.id) {
          return selected = product
        }
      })
    default:
      return state;
  }
}
const store = createStore(combineReducers({
  products: productsReducer,
  filters: filtersReducer
}))

store.subscribe(() => {
  console.log(store.getState());
})
const cake = store.dispatch(addproduct({name: 'cake', price: 25000}));
const pastry = store.dispatch(addproduct({name: 'pastry', price: 3000}));
const cookie = store.dispatch(addproduct({name: 'cookie', price: 300}));

store.dispatch(findProduct(pastry.product.id));
console.log(selected);

function Confectionary() {
  return(
    <p>{JSON.stringify(selected)}</p>
  )
}



ReactDOM.render(
  <Confectionary />,
  document.getElementById('app')
);
