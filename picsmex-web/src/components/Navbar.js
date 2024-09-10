import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Negocios">Business</Link>
        </li>
        <li>
          <Link to="/Sociales">Social</Link>
        </li>
        <li>
          <Link to="/Contacto">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
