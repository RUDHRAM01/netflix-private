import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './frontend/Home';
import SignIn from './frontend/SignIn';
import SignUp from './frontend/SignUp';
import './index.css'
export default function App() {

  return (
    <>

        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/signIn' component={SignIn} />
          <Route exact path='/SignUp' component={SignUp} />
          
        </div>
   
    </>
  );
}