import uuid from 'uuid';


export const addContact = (
  {
    contactType = '',
    firstName = '',
    lastName = '',
    company = '',
    phone = '',
    mobile = '',
    website = '',
    address =''
  } = {}
) => ({
  type: 'ADD_CONTACT',
  contact: {
    id: uuid(),
    contactType,
    firstName,
    lastName,
    company,
    phone,
    mobile,
    website,
    address
  }
});

export const removeContact = ({ id }) => ({
  type: 'REMOVE_CONTACT',
  id
})

export const editContact = (id, updates) => ({
  type: 'EDIT_CONTACT',
  id,
  updates
});
