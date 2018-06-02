import uuid from 'uuid';

export const addItem = ({
  itemType = '',
  name = '',
  unit = '',
  saleInformation = {
    rate : '',
    account : '',
    description : ''
  },
  purchaceInformation = {
    rate : '',
    account : '',
    description : ''
  },
  tax = ''
} = {}) => ({
  type: 'ADD_ITEM',
  item: {
    id: uuid(),
    itemType,
    name,
    unit,
    saleInformation,
    purchaceInformation,
    tax
  }
})

export const removeItem = ({ id }) => ({
  type: 'REMOVE_ITEM',
  id
})

export const editItem = (id, updates) => ({
  type: 'EDIT_ITEM',
  id,
  updates
});
