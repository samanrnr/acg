import React from 'react';
import { Link } from 'react-router-dom';

const ContactListItems = ({id, firstName, lastName}) => (
  <div>
    <Link to={`/edit_contact/${id}`}>
      <p>{`${firstName} ${lastName}`}</p>
    </Link>
  </div>
)

export default ContactListItems;
