import React from 'react';
import './Steps.css';

const Steps = () => {
  return (
    <div className="container-layout">
      <div className="content-column">
        <div className="content-column-inner">
          <div className="size-12">
            <h2 className="heading">Getting started is easy</h2>
            <p className="text-center">Earn Stars and get rewarded in a few easy steps.</p>
          </div>
          <ol className="multiThumbnailsRow-ole">
            <li className="card-1">
              <div className="image-center">
                <img
                  className="sb-imageFade__show"
                  src="\images\getting_started_1.jpg"
                  alt="step1"
                  width={48}
                />
              </div>
              <div className="card-content">
                <h3 className="header-card">Create an account</h3>
                <p className="pt3">
                  To get started,{' '}
                  <a className="colorGreen" href="https://www.starbucks.com/account/create">
                    join now
                  </a>
                  . You can also{' '}
                  <a className="colorGreen" href="https://starbucks.app.link/VLa2I3inh9">
                    join in the app
                  </a>{' '}
                  to get access to the full range of Starbucks® Rewards benefits.
                </p>
              </div>
            </li>
            <li className="card-1">
              <div className="image-center">
                <img
                  className="sb-imageFade__show"
                  src="\images\getting_started_2.jpg"
                  alt="Create account"
                  width={48}
                />
              </div>
              <div className="card-content">
                <h3 className="header-card">Order and pay how you’d like</h3>
                <p className="pt3">
                  Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways.{' '}
                  <a className="colorGreen" href="https://www.starbucks.com/account/create">
                    Learn how
                  </a>
                </p>
              </div>
            </li>
            <li className="card-1">
              <div className="image-center">
                <img
                  className="sb-imageFade__show"
                  src="\images\getting_started_3.jpg"
                  alt="Earn rewards"
                  width={48}
                />
              </div>
              <div className="card-content">
                <h3 className="header-card">Earn Stars, get Rewards</h3>
                <p className="pt3">
                  As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Steps;