import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../profile/data.js';


const Navbar = (props) => {
  
  const [pageSize, setPage] = useState( window.innerWidth );

  const [navStyle, setNav] = useState(()=>{
    return window.innerWidth <= 992 ? 'd-none':''; 
  });

  function detectWidth(){
    setPage(window.innerWidth);
    setNav(()=>{
      return window.innerWidth <= 992 ? 'd-none':'';
    })
  }
  
  useEffect(() => {

    window.addEventListener('resize',detectWidth);
    return ()=>{
      window.removeEventListener('resize',detectWidth);
    };

  },[pageSize]);
  

  
  const [hamStyle, setHam] = useState('');
  
  function handleCross(){
      setNav(()=>{
        return 'd-none'
      });
      setHam('');
  }

  function handleHam(){
    setHam('d-none');
    setNav('');
  }

  return (
    <>
      <div className={'d-lg-none bg-dark p-2 text-light ' + hamStyle } >

        <i className="fa-solid fa-bars fa-2xl" onClick={handleHam}></i>

      </div>

      <nav className = {"navbar p-2 bg-dark h-100 " + navStyle }>

        <div className="d-flex flex-column w-100 ">

            <div className='cross-icon text-right p-2 d-lg-none' onClick={handleCross}>
              <i className="fa-solid fa-xmark fa-2xl text-warning "></i>
            </div>
            
            <div className="navbar-nav d-flex flex-column ">

              <Link className="nav-link p-2" to="/dashboard">Dashboard</Link>

              <Link className="nav-link p-2" to="/ledger">Ledger</Link>

              <Link className="nav-link p-2" to="/investments">Investment</Link>

              <Link className="nav-link p-2" to="/users_all">Users</Link>

              <Link className="nav-link p-2" to="/plans_all">Plans</Link>
            </div>

        </div>
        
        <div className='p-2 h4 text-secondary d-flex justify-content-center align-items-center flex-column w-100 '>
        
            <img src={data.img} alt="user-img" className='w-25 rounded-circle float-start'/>

            <Link to='/user_profile' className='text-success text-decoration-none p-2'>View Profile</Link> 

            <Link to='/' className='text-warning text-decoration-none p-2'>Logout</Link>

        </div>

      </nav>

    </>
  )
}

export default Navbar
