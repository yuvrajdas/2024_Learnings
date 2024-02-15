import React from 'react';
import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import  ContactList from './Components/ContactList';
import NavBar from './Layout/NavBar';
import EditContact from './Components/EditContact';
import AddContact from './Components/AddContact';
import ViewContact from './Components/ViewContact';

function App() {
  return (
    <>
      <NavBar  />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/contacts'} />} />
          <Route path={'/contacts'} element={<ContactList />} />
          <Route path={'/contacts/edit/:editId'} element={<EditContact />} />
          <Route path={'/contacts/add'} element={<AddContact />} />
          <Route path={'/contacts/view/:viewId'} element={<ViewContact />} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
