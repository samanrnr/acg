import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0 } = {}
  ) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
  }
});

const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
})
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
})

const setFilterText =  (text) => ({
  type: "SET_FILTER_TEXT",
  text
})
const sortByDate = () => ({
  type: "SORT_BY_DATE"
})

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
})

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})
const expensesReducerDefault = []

const expensesReducer = (state = expensesReducerDefault, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return[ ...state,
      action.expense]
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        }else {
          return expense
        }
      });
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id );
    default:
      return state;
  }
}

const filtersReducerDefault = {
  text : '',
  sortBy : 'Date',
  startDate : '',
  endDate : ''
}

const filtersReducer = (state = filtersReducerDefault, action) => {
  switch(action.type) {
    case 'SET_FILTER_TEXT':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'Date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'Amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate : action.startDate
      }
      case 'SET_END_DATE':
        return {
          ...state,
          endDate : action.endDate
        }
    default:
      return state;
  }
}
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt >= endDate ;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if(sortBy === 'Date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'Amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  })
}

const store = createStore(combineReducers({
  expenses : expensesReducer,
  filters: filtersReducer
}))


store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100, createdAt:130 }));
const expenseTwo = store.dispatch(addExpense({description: 'food', amount: 200, createdAt:122}));

// store.dispatch(editExpense(expenseOne.expense.id, { amount: 200 }));
// store.dispatch(removeExpense(expenseTwo.expense.id));
// store.dispatch(setFilterText('foo'));
// store.dispatch(sortByAmount());
store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// // store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
