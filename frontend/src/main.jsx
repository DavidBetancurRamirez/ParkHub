import './main.css';

import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from './context/userContext';
import { MessageContextProvider } from './context/messageContext';
import Sesion from './components/Sesion';
import Principal from './components/Principal';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* Contextos */}
    <MessageContextProvider>
      <UserContextProvider>

          {/* Ruteo */}
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Principal />} />
              <Route path='/sesion' element={<Sesion />} />
            </Routes>
          </BrowserRouter>

      </UserContextProvider>
    </MessageContextProvider>

  </React.StrictMode>
)
