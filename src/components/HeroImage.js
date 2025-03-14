import React from 'react';
import './HeroImage.css';

const HeroImage = () => {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <div className="hero-text">
          <h2>
            FREE COFFEE
            <br />
            IS A TAP AWAY
          </h2>
        </div>
        <div className="hero-subtext">
          <p>Join now to start earning Rewards.</p>
        </div>
        <div className="hero-container-2">
          <button className="join-button-h">Join now</button>
          <br />
          <span>
            Or{' '}
            <a
              href="https://www.starbucks.com/rewards/mobile-apps"
              className="join-link"
            >
              join in the app
            </a>{' '}
            for the best experience
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;