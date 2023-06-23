import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';
import './Header.module.css';

export default function Header() {
  const navStyles = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'underline' : 'none',
  });

  return (
    <header>
      <div className="header-logo-and-name">
        <img className="header-logo" src={logo} alt="planet logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <nav>
        <NavLink style={navStyles} to="/">Rockets</NavLink>
        <NavLink style={navStyles} to="/Missions">Missions</NavLink>
        <NavLink className="profile" style={navStyles} to="/MyProfile">My Profile</NavLink>
      </nav>
    </header>
  );
}
