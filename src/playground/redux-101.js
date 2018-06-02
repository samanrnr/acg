import { createStore } from 'redux';

const increment = ( {incrementBy = 1} = {} ) => ({
  type: 'INCREMENT',
  incrementBy
})

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
  }
});

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(increment({incrementBy: 10}))
store.dispatch(increment({incrementBy: 15}))
