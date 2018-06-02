import React from 'react';
import { connect } from 'react-redux';
import { editItem } from '../actions/itemsActions';
import ItemsForm from './itemsForm'

const EditItem = (props) => (
  <div>
    <ItemsForm
      item={props.item}
      onSubmit={
        (item) => {
          props.dispatch(editItem(props.item.id, item));
          props.history.push('/items');
        }
      }
    />
  </div>
)


const mapStateToProps = (state, props) => {
  return {
    item: state.items.find( (item) => item.id === props.match.params.id  )
  }
}
export default connect(mapStateToProps)(EditItem);
