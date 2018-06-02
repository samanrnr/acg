import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addFlower = ({
  name = '' ,
  price = 0,
  kind = '',
  flowerColor = '',
  potSize = ''
}={}) => ({
  type: 'ADD_FLOWER',
  flower: {
    id: uuid(),
    name,
    price,
    kind,
    flowerColor,
    potSize
  }
})

const editFlower = (id, update) => ({
  type: 'EDIT_FLOWER',
  id,
  update
})

const removeFlower = (id) => ({
  type: 'REMOVE_FLOWER',
  id
})

const setFilterText = (text) => ({
  type: 'SET_FILTER_TEXT',
  text
})

const setKindFilter = (kind) => ({
  type: 'SET_KIND_FILTER',
  kind
})

const setPotSize = (potSize) => ({
  type: 'SET_POT_SIZE',
  potSize
})

const setFlowerColor = (flowerColor) => ({
  type: 'SET_FLOWER_COLOR',
  flowerColor
})

const setMinimumPrice = (minimumPrice) => ({
  type: 'SET_MINIMUM_PRICE',
  minimumPrice
})

const setMaximumPrice = (maximumPrice) => ({
  type: 'SET_MAXIMUM_PRICE',
  maximumPrice
})
const flowersReducerDefault = []
const flowersReducer = (state = flowersReducerDefault, action) => {
  switch(action.type) {
    case 'ADD_FLOWER':
      return [
        ...state,
        action.flower]
    case 'EDIT_FLOWER':
      return state.map((flower) => {
        if (flower.id === action.id) {
          return{
            ...flower,
            ...action.update
          }
        }
        else{
          return flower
        }
      });
    case 'REMOVE_FLOWER':
      return state.filter(({id}) => id !== action.id)
    default:
      return state;
  }
}

const filtersReducerDefault = {
  text: '',
  kind: '',
  potSize: '',
  flowerColor: '',
  minimumPrice: '',
  maximumPrice: ''
}
const filtersReducer = (state = filtersReducerDefault, action) => {
  switch (action.type) {
    case 'SET_FILTER_TEXT':
      return {
        ...state,
        text: action.text
      }
    case 'SET_KIND_FILTER':
      return {
        ...state,
        kind: action.kind
      }

    case 'SET_POT_SIZE':
      return {
        ...state,
        potSize: action.potSize
      }

    case 'SET_FLOWER_COLOR':
      return {
        ...state,
        flowerColor: action.flowerColor
      }
    case 'SET_MINIMUM_PRICE':
      return {
        ...state,
        minimumPrice: action.minimumPrice
      }
    case 'SET_MAXIMUM_PRICE':
      return {
        ...state,
        maximumPrice: action.maximumPrice
      }
    default:
        return state;
  }
}

const store = createStore(combineReducers({
  flowers: flowersReducer,
  filters: filtersReducer
}))

const getVisibleFlowers = (flowers, {text, kind, potSize, flowerColor, minimumPrice, maximumPrice}) => {
  return flowers.filter((flower) => {
    const checkTextFilter = flower.name.toLowerCase().includes(text.toLowerCase());
    const checkFilterKind = flower.kind.toLowerCase().includes(kind.toLowerCase());
    const checkPotSize = flower.potSize == potSize;
    // const checkFlowerColor = flower.flowerColor.map((color) => color) === flowerColor;
    const checkMinimumPrice = typeof minimumPrice !== 'number' || flower.price >= minimumPrice ;
    const checkMaximumPrice = typeof maximumPrice !== 'number' || flower.price < maximumPrice ;

    return checkTextFilter && checkFilterKind && checkPotSize && checkMinimumPrice && checkMaximumPrice;
  });
}

store.subscribe(() => {
  const state = store.getState();
  const visibleFlowers = getVisibleFlowers(state.flowers, state.filters)
  console.log(visibleFlowers);
})

const cyclamen = store.dispatch(addFlower({name: 'cyclamen', price: 8000, kind: 'season', flowerColor: ['red', 'pink', 'violet'], potSize: 16}));
const tulip = store.dispatch(addFlower({name: 'tulip', price: 2000, kind: 'season', flowerColor: ['red', 'pink', 'violet'], potSize: 11}));
store.dispatch(editFlower(cyclamen.flower.id, {price: 10000}));
// store.dispatch(removeFlower(cyclamen.flower.id));
store.dispatch(setFilterText('cyclame'));
store.dispatch(setKindFilter('season'));
store.dispatch(setPotSize('16'));
// store.dispatch(setFlowerColor('aa'));
store.dispatch(setMinimumPrice(1000));
store.dispatch(setMaximumPrice(18000));
