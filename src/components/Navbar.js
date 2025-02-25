import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className='header-container'>
      <nav className="navbar">
        <div className='global-max-width'>
          <div className='flex-container'>
            <div className='logo-container'>
              <div className="navbar-logo">
                <img src="/images/logo.png" alt="Logo" />
              </div>
            </div>
            <div className='global-wrapper-flex'>
              <div className='flex-ul-li'>
                <ul className="navbar-links">
                  <li className='list-item'>
                    <a
                      href="#menu"
                      className={activeLink === 'menu' ? 'active' : ''}
                      onClick={() => handleLinkClick('menu')}
                    >
                      MENU
                    </a>
                  </li>
                  <li className='list-item'>
                    <a
                      href="#rewards"
                      className={activeLink === 'rewards' ? 'active' : ''}
                      onClick={() => handleLinkClick('rewards')}
                    >
                      REWARDS
                    </a>
                  </li>
                  <li className='list-item'>
                    <a
                      href="#giftCards"
                      className={activeLink === 'giftCards' ? 'active' : ''}
                      onClick={() => handleLinkClick('giftCards')}
                    >
                      GIFT CARDS
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navbar-buttons">
                <div className='flex-items-center'>
                  <ul className="navbar-links">
                    <li className='flex-find-btns'>
                      <a className='a-flex'
                        href="#findAstore"
                      >
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
                    </li>
                  </ul>
                  <button className="sign-button">Sign in</button>
                  <button className="join-button-header">Join now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Navbar;
