
import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Navbar = () => {
  return (

    <div>
    <nav className="navbar">
      <Link className="logo" to="/">
        Logo
      </Link>

      <ul className="nav-links">
        <li>
          <Link className="link" to="/">Home</Link>
        </li>

        <li>
          <Link className="link" to="/about">About</Link>
        </li>

        <li>
          <Link className="link" to="/login">Log in</Link>
        </li>

        <li>
          <Link className="link" to="/college">College</Link>
        </li>

        <li>
          <Link className="link" to="/users">Users</Link>
        </li>
      </ul>

    </nav>
<Outlet/>
</div>


  );
};

export default Navbar;
