import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Pages/Signup/Login.js';   //Done - frontend part

import Forgotpwd from './Pages/Signup/forgotpwd.js';   //Done - frontend part

import Dashboard from './Pages/dashboard/dashboard.js';   //Remaining - frontend part

import Nopage from './Pages/nopage/nopage.js';   //Remaining - frontend part

import Profile from './Pages/profile/profile.js';   //Remaining - frontend part

import Ledger from './Pages/Ledger/ledger.js';   //Remaining - frontend part

import Investment from './Pages/Investment/invest.js';   //Remaining - frontend part

import Users from './Pages/Users/user.js';   //Remaining - frontend part

import Plans from './Pages/Plans/plans.js';   //Remaining - frontend part



function App() {
  

  return (
    <Router>
  
     <Routes>

      <Route index element={<Login/>} />

      <Route exact path='/forgot-pwd' element={<Forgotpwd/>} />

      <Route exact path='/dashboard' element={<Dashboard/>} />

      <Route exact path='/user_profile' element={<Profile/>} />

      <Route exact path='/ledger' element={<Ledger/>} />

      <Route exact path='/investments' element={<Investment/>} />

      <Route exact path='/users_all' element={<Users/>} />
      
      <Route exact path='/plans_all' element={<Plans/>} />

      <Route path='/*' element={<Nopage/>} />      

     </Routes>

    </Router>
  );
}

export default App;
