import { NavLink } from 'react-router-dom';
import { HStack } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: '#f0f0f0', marginBottom: '1rem' }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <HStack>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item" >
                  <NavLink to="/users" className="nav-link" >
                    Users
                  </NavLink>
                </li>
            </HStack>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;