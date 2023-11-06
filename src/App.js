import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './frontend/Home';
import SignIn from './frontend/SignIn';
import SignUp from './frontend/SignUp';
import './index.css'
export default function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>
      </div>
    </>
  );

}