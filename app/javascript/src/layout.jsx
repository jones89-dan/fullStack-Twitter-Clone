import React, { useEffect, useState } from 'react';
import { logOutUser, getCurrentUser } from './requests';
import './home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

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

  useEffect(() => {
    getCurrentUser(function (response) {
      setCurrentUser(response.username);
    });
  });

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href='/'><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/tweetsFeed">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={"/" + currentUser}>Tweets</a>
                </li>
                <li className="nav-item">
              <a className="nav-link" onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
        </div>
      </nav>
      <div className="no-left container py-3 mb-5">
        {props.children}
      </div>
      <footer className="fixed-bottom p-3 bg-dark">
        <div className="container">
          <span className="me-3 text-secondary">Built by <a href="https://github.com/jones89-dan">jones89-Dan</a> with ☕ &nbsp;and ⚔️ </span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;
