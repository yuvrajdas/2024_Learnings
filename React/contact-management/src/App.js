import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import  ContactList from './Components/ContactList';
import NavBar from './Layout/NavBar';

function App() {
  return (
    <>
      <NavBar  />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/contacts'} />} />
          <Route path={'/contacts'} element={<ContactList />} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
