import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="nav">
          <h3><a>Side bar</a></h3>
          <div><a>Profile</a></div>
          <div><a>Messages</a></div>
          <div><a>Music</a></div>
          <div><a>Settings</a></div>
        </nav>
    )         
  }

  export default Navbar;