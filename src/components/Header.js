import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>ACG Project</h1>

    <NavLink to="/" className="nav_item" activeClassName="is-active">داشبورد</NavLink>
    <NavLink to="/Contacts" className="nav_item" activeClassName="is-active">اشخاص</NavLink>
    <NavLink to="/create_contact" className="nav_item" activeClassName="is-active">ایجاد شخص </NavLink>
    <NavLink to="/items" className="nav_item" activeClassName="is-active">کالا و خدمات</NavLink>
    <NavLink to="/create_items" className="nav_item" activeClassName="is-active">ایجاد کالا و خدمات</NavLink>

  </header>
);

export default Header;
