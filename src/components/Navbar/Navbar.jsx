import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
/* 
  * это файл навигации сайта
  * Установил пакет react-router-dom 
  * Ссылки NavLink под названием Route дублируются в App.js
  * NavLink это встроенный компонент 
  * NavLink позволяет менять URL без перезагрузки страницы по сути делает PreventDefault*/
const Navbar = () => {
    return (
      <nav className="nav">
          <h3>Side bar</h3>
          <div className="item"><NavLink to="/profile">Profile</NavLink></div>
          <div className="item"><NavLink to="/dialogs">Messages</NavLink></div>
          <div className="item"><a>Music</a></div>
          <div className="item"><a>Settings</a></div>
        </nav>
    )         
  }

  export default Navbar;