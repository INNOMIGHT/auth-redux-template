import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import DefaultLayout from './Layouts/DefaultLayout';
import ProtectedLayout from './Layouts/ProtectedLayout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
