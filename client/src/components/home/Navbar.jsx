import React from 'react';
import logo from '../../assets/images/logo_bycrissy_colored.png'; 
import '../../styles/Navbar.css';
import { HashLink } from 'react-router-hash-link';


function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    alert('You have been logged out.');
    window.location.href = '/login'; 
  };

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <nav id="main-navbar" className="navbar">
      <a href="/" className="logo-link">
        <img src={logo} alt="Site Logo" className="site-logo" style={{ width: '150px', height: 'auto' }} />
      </a>

      <ul className="nav-links">
        <li><HashLink smooth to="/#hero-slider">Home</HashLink></li>
        <li><HashLink smooth to="/#about-section">About</HashLink></li>
        <li><HashLink smooth to="/#gallery-preview">Portfolio</HashLink></li>
        <li><HashLink smooth to="/#contact-section">Contact</HashLink></li>
        {isLoggedIn ? (
          <>
            <li><a href="/client-gallery">My Gallery</a></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><a href="/login">Login</a></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
