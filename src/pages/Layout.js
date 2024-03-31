import { Outlet, Link } from "react-router-dom";
import  "./Layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div >
      
    {/* <nav className="d-flex justify-content-between navbar-light bg-light align-items-center p-0 m-0">
    
        <div className='pl-4' style={{width:'100px'}}>
          <a href="/" className=" nav-link  p-2">
            <h4 className="m-0 p-0">Naresh</h4>
          </a>
        </div>
        <div >
        <ul className="items m-0 p-0">
          <li className="nav-items">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-items">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-items">
            <Link className="nav-link" to="/skills">Skills</Link>
          </li>
          <li className="nav-items">
            <Link className="nav-link" to="/education">Education</Link>
          </li >
          <li className="nav-items">
            <Link className="nav-link" to="/experience">Experience</Link>
          </li>
          <li className="nav-items">
            <Link  className="nav-link" to="/contacts">Contacts</Link>
          </li>
        </ul>
        </div>

        
    </nav> */}
  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
      <div className='pl-2'>
          <a href="/" className=" nav-link  p-2">
            <h4 className="m-0 p-0 text-left text-success">Naresh</h4>
          </a>
        </div>
        <div className="d-flex align-items-center">
          
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size="2x"/>
          </button>
        </div>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-warning" to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/skills" onClick={toggleMenu}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/education" onClick={toggleMenu}>Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/experience" onClick={toggleMenu}>Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contacts" onClick={toggleMenu}>Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>





    </div>
     

      <Outlet />
    </>
  )
};

export default Layout;