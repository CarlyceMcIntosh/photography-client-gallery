import React from 'react';
import logo from '../../assets/images/logo_bycrissy_colored.png'; 
import '../../styles/Navbar.css';

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
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/portfolio">Info</a></li>
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
