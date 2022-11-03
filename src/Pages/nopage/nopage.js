import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nopage = () => {
  const navigate = useNavigate();
  setTimeout(()=>{
    navigate("/");
  },2000);
  
  return (
    <div className='d-flex justify-content-center align-items-center w-100 h-full'>
      <h1>Invalid page</h1>
    </div>
  )
}

export default Nopage
