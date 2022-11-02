import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Pages/Signup/Login.js';   //Done - frontend part

import Dashboard from './Pages/dashboard/dashboard.js';   //Remaining - frontend part

import Nopage from './Pages/nopage/nopage.js';   //Remaining - frontend part

import Profile from './Pages/profile/profile.js';   //Remaining - frontend part

import Ledger from './Pages/Ledger/ledger.js';   //Remaining - frontend part

import Investment from './Pages/Investment/invest.js';   //Remaining - frontend part

import Users from './Pages/Users/user.js';   //Remaining - frontend part

import Plans from './Pages/Plans/plans.js';   //Remaining - frontend part

import People from './Pages/people/people.js';  // Remaining - frontend part

import ResetPwd from './Pages/Signup/reset_pwd.js';

function App() {
  

  return (
    <Router>
  
     <Routes>

      <Route index element={<Login/>} />

      <Route path='/dashboard' element={<Dashboard/>} />

      <Route path='/user_profile' element={<Profile/>} />

      <Route path='/ledger' element={<Ledger/>} />

      <Route path='/investments' element={<Investment/>} />

      <Route path='/users_all' element={<Users/>} />
      
      <Route path='/plans_all' element={<Plans/>} />

      <Route path='/people' element={<People/>} />

      <Route path='/reset_pwd' element={<ResetPwd/>} />

      <Route path='/*' element={<Nopage/>} />      

     </Routes>

    </Router>
  )
  
}

export default App;
