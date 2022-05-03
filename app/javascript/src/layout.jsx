import React from 'react';

const Layout = (props) => {
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
                  <a className="nav-link" href="/demo">Sign In</a>
                </li>
              </ul>
            </div>
        </div>
      </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="p-3 bg-dark">
        <div className="container">
          <span className="me-3 text-secondary">Built by <a href="https://github.com/jones89-dan">jones89-Dan</a> with ☕ and ⚔️ </span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;
