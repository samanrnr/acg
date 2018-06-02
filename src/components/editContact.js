import React from 'react';
import { connect } from 'react-redux';
import { editContact } from '../actions/contactsAction';
import ContactForm from './contactForm'

const EditContact = (props) => (
  <div>
    <ContactForm
      contact={props.contact}
      onSubmit={
        (contact) => {
          props.dispatch(editContact(props.contact.id, contact));
          props.history.push('/contacts');
        }
      }
    />
  </div>
)


const mapStateToProps = (state, props) => {
  return {
    contact: state.contacts.find( (contact) => contact.id === props.match.params.id  )
  }
}
export default connect(mapStateToProps)(EditContact);
