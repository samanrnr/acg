import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AcgDashboard from '../components/AcgDashboard';
import Contacts from '../components/Contacts';
import EditContact from '../components/editContact';
import AddContact from '../components/addContact';
import Items from '../components/Items';
import EditItem from '../components/EditItem';
import AddItem from '../components/addItem';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={AcgDashboard} exact={true} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/edit_contact/:id" component={EditContact} />
        <Route path="/create_contact" component={AddContact} />
        <Route path="/items" component={Items} />
        <Route path="/edit_item/:id" component={EditItem} />
        <Route path="/create_items" component={AddItem} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
