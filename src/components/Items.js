import React from 'react';
import { connect } from 'react-redux';
import ItemsListItem from './itemsListItem'

const Items = (props) => (
  <div>
    <h2>کالا و خدمات</h2>
    {props.items.map((item) => (
      <ItemsListItem
        key={item.id}
        {...item}
      />
    ))}
  </div>
)


const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}
export default connect(mapStateToProps)(Items);
