import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import peopleData from '../../data/peopleData';



const Navbar = () => {
  const data = peopleData[0];
  
  const [pageSize, setPage] = useState( window.innerWidth );

  function detectWidth(){
    setPage(window.innerWidth);
    
  }
  
  useEffect(() => {

    window.addEventListener('resize',detectWidth);
    return ()=>{
      window.removeEventListener('resize',detectWidth);
    };

  },[pageSize]);
  
  

  const navigate = useNavigate(); 

  function logOut(){

    try{

        localStorage.removeItem("refreshToken");
        localStorage.removeItem("token");

        navigate('/'); 

    }catch(err){

      alert("Couldn't logout. Try again!");

    }
    
  }
  
  

  return (
    <>
      <div className="btn btn-outline-light text-secondary rounded-3 " data-bs-toggle="offcanvas" data-bs-target="#Navbar" aria-controls="Navbar">
        <i className="fa-solid fa-bars fa-2xl"></i>
      </div>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="Navbar" aria-labelledby="NavbarLabel">
        <div className="offcanvas-header">

          <h5 className="offcanvas-title" id="NavbarLabel">Growpital</h5>

          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>

        </div>
        <div className="offcanvas-body bg-secondary d-flex justify-content-between flex-column">
          <div className="d-flex flex-column ">

            <Link className="nav-link p-2" data-bs-dismiss="offcanvas" to="/dashboard">Dashboard</Link>

            <Link className="nav-link p-2" data-bs-dismiss="offcanvas" to="/ledger">Ledger</Link>

            <Link className="nav-link p-2" data-bs-dismiss="offcanvas" to="/investments">Investment</Link>

            <Link className="nav-link p-2" data-bs-dismiss="offcanvas" to="/users_all">Users</Link>

            <Link className="nav-link p-2" data-bs-dismiss="offcanvas" to="/plans_all">Plans</Link>

            <Link className="nav-link p-2" data-bs-dismiss="offcanvas" to="/people">People</Link>

            <span className="nav-link p-2 text-warning" data-bs-dismiss="offcanvas" onClick={logOut}> Logout </span>

          </div>
          <div className='text-light d-flex justify-content-around align-items-center rounded-pill w-100 border border-light'>

            <div className='d-flex justify-content-center align-items-center gap-2'>
              <img src={data.img} alt="user-img" className='rounded-circle float-start' style={{width: '40px'}}/>
              <span className={pageSize <= 1380 ? 'd-none' : ''}> {data.name} </span>
            </div>

            <div className='h2 m-2'>
              <Link to='/user_profile' data-bs-dismiss="offcanvas">
              <i className="fa-solid fa-ellipsis-vertical text-light"></i>
              </Link> 
            </div>  

          </div>
        </div>
      </div>
      
    </>
  )
}

export default Navbar
