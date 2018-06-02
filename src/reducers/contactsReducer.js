const contactsREducerDefault = []

export default (state = contactsREducerDefault, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [
        ...state,
        action.contact
      ]
      
    case 'REMOVE_CONTACT':
      return state.filter(({id}) => id !== action.id);

    case 'EDIT_CONTACT':
      return state.map((contact) => {
        if (contact.id === action.id) {
          return {
            ...contact,
            ...action.updates
          }
        } else {
          return contact
        }
      });

    default:
      return state;

  }
}
