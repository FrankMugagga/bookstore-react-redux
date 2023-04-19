import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

function Header() {
  return (
    <nav>
      <div className="linkCont">
        <h1>
          BookstoreCMS
        </h1>
        <NavLink to="/">BOOKS</NavLink>
        <NavLink to="/categories">CATEGORIES</NavLink>
      </div>
      <div className="humanCont">
        <BsFillPersonFill className="humanicon" />
      </div>
    </nav>
  );
}

export default Header;
