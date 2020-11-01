import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const PageHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">Boilerplate Django App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbar-color"
        aria-controls="navbar-color" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbar-color">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              <FontAwesomeIcon icon={faHome} />&nbsp;
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <FontAwesomeIcon icon={faEnvelope} />&nbsp;
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default PageHeader;