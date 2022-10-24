import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Components/Signup/Login.js';   //Done - frontend part

import Forgotpwd from './Components/Signup/forgotpwd.js';   //Done - frontend part


import Dashboard from './Components/dashboard/dashboard.js';   //Remaining - frontend part


import Nopage from './Components/nopage/nopage.js';   //Remaining - frontend part


import Profile from './Components/profile/profile.js';   //Remaining - frontend part

import EditProfile from './Components/profile/editProfile.js';   //Remaining - frontend part

import ChangePwd from './Components/profile/ChangePwd.js';   //Remaining - frontend part


import Ledger from './Components/Ledger/ledger.js';   //Remaining - frontend part


import Investment from './Components/Investment/invest.js';   //Remaining - frontend part


import Users from './Components/Users/user.js';   //Remaining - frontend part


import Plans from './Components/Plans/plans.js';   //Remaining - frontend part


import CreateNewPlan from './Components/Plans/createNewPlan.js';  //Remaining -frontend part


function App() {
  

  return (
    <Router>
  
     <Routes>

      <Route index element={<Login/>} />

      <Route exact path='/forgot-pwd' element={<Forgotpwd/>} />

      <Route exact path='/dashboard' element={<Dashboard/>} />

      <Route exact path='/user_profile' element={<Profile/>} />

      <Route exact path='/update_profile' element={<EditProfile/>} />

      <Route exact path='/change_password' element={<ChangePwd/>} />

      <Route exact path='/ledger' element={<Ledger/>} />

      <Route exact path='/investments' element={<Investment/>} />

      <Route exact path='/users_all' element={<Users/>} />
      
      <Route exact path='/plans_all' element={<Plans/>} />

      <Route exact path='/create-new-plan' element={<CreateNewPlan/>} />

      <Route path='/*' element={<Nopage/>} />      

     </Routes>

    </Router>
  );
}

export default App;
