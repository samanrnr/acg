import React from 'react';
import { connect } from 'react-redux';
import ContactListItems from './contactListItems';


const Contacts = (props) => (
  <div>
    <h1>اشخاص</h1>
    {props.contacts.map((contact) => (
      <ContactListItems
        key={ contact.id }
        {...contact}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}
export default connect(mapStateToProps)(Contacts);
