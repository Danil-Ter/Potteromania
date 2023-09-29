import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';

export default function Header({ toggleBackground }) {
  const location = useLocation();

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Faculties
            </Link>
          </li>
          <li>
            <Link
              to="/all"
              className={location.pathname === '/all' ? 'active' : ''}
            >
              All Characters
            </Link>
          </li>
          <li>
            <Link
              to="/magic"
              className={location.pathname === '/magic' ? 'active' : ''}
            >
              Magic
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleBackground}>Change Background</button> 
    </header>
  );
}
