import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemsActions';
import ItemsForm from './itemsForm';

const AddItem = (props) => (
  <ItemsForm
    onSubmit={
      (item) => {
        props.dispatch(addItem(item));
        props.history.push('/items');
      }
    }
  />
)



export default connect()(AddItem);
