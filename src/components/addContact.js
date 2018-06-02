import React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/contactsAction'
import ContactForm from './contactForm'

const AddContact = (props) => (
<div>
  <ContactForm onSubmit={(contact) => {
    props.dispatch(addContact(contact));
    props.history.push('/contacts');

  }} />
</div>
)


export default connect()(AddContact);
