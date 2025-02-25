import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="global-max-width">
          <div className="navbar-content">
            <div className="navbar-logo">
              <img src="/images/logo.png" alt="Logo" />
            </div>
            <ul className="navbar-links">
              <li>
                <a
                  href="#menu"
                  className={activeLink === 'menu' ? 'active' : ''}
                  onClick={() => handleLinkClick('menu')}
                >
                  MENU
                </a>
              </li>
              <li>
                <a
                  href="#rewards"
                  className={activeLink === 'rewards' ? 'active' : ''}
                  onClick={() => handleLinkClick('rewards')}
                >
                  REWARDS
                </a>
              </li>
              <li>
                <a
                  href="#giftCards"
                  className={activeLink === 'giftCards' ? 'active' : ''}
                  onClick={() => handleLinkClick('giftCards')}
                >
                  GIFT CARDS
                </a>
              </li>
            </ul>
            <div className="navbar-buttons">
              <a href="#findAstore" className="find-store-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                Find a store
              </a>
              <button className="sign-button">Sign in</button>
              <button className="join-button-header">Join now</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;