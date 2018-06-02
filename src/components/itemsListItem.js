import React from 'react';
import { Link } from 'react-router-dom';

const ItemsListItem = ({id, name, saleInformation}) => (
  <div>
    <Link to={`/edit_item/${id}`}>
      <p>{ name }</p>
      <p>{saleInformation.rate}</p>
    </Link>
  </div>
)

export default ItemsListItem;
