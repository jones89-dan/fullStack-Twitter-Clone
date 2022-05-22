import React, { useEffect, useState } from 'react';
import { logOutUser, getCurrentUser } from './requests';
import './home.scss';

const Layout = (props) => {

  const [currentUser, setCurrentUser] = useState("");

  const handleLogout = function () {
    getCurrentUser(function (response) {
      setCurrentUser(response.username);;
    })

    logOutUser(function (response) {
      if (response.success == true) {
        window.location.replace('/');
      };
    });
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href='#'>Twitter Clone</a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/tweetsFeed">Tweets</a>
                </li>
                <li className="nav-item">
              <a className="nav-link" onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
        </div>
      </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="footer-fixed-bottom p-3 bg-dark">
        <div className="container">
          <span className="me-3 text-secondary">Built by <a href="https://github.com/jones89-dan">jones89-Dan</a> with ☕ and ⚔️ </span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;
