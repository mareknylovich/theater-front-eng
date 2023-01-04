import React, { useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { Link } from '../../components';

export const HeaderView = ({ activePath }) => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return (
    <header className="page-header">
      <div className="rd-navbar-wrap">
        <nav
          className="rd-navbar rd-navbar-default"
          data-layout="rd-navbar-fixed"
          data-sm-layout="rd-navbar-fixed"
          data-sm-device-layout="rd-navbar-fixed"
          data-md-layout="rd-navbar-fixed"
          data-md-device-layout="rd-navbar-fixed"
          data-lg-device-layout="rd-navbar-static"
          data-lg-layout="rd-navbar-static"
          data-xl-device-layout="rd-navbar-static"
          data-xl-layout="rd-navbar-static"
          data-xxl-device-layout="rd-navbar-static"
          data-xxl-layout="rd-navbar-static"
          data-stick-up-clone="false"
          data-sm-stick-up="true"
          data-md-stick-up="true"
          data-lg-stick-up="true"
          data-md-stick-up-offset="115px"
          data-lg-stick-up-offset="35px"
        >
          <div className="rd-navbar-inner rd-navbar-search-wrap">
            <div className="rd-navbar-panel rd-navbar-search-lg_collapsable">
              <button className="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap">
                <span />
              </button>
              <div className="rd-navbar-brand">
                <a className="brand-name" href="/"></a>
              </div>
            </div>
            <div className="rd-navbar-nav-wrap rd-navbar-search_not-collapsable">
              <div className="rd-navbar-search_collapsable">
                <ul className="rd-navbar-nav">
                  <li className="active">
                    <a href="/theatr" className="font-style">
                      The Theatre
                    </a>
                    <ul className="rd-navbar-dropdown">
                      <li>
                        <a href="/actors" className="font-style">
                          Actors
                        </a>
                      </li>
                      <li>
                        <a href="/performances" className="font-style">
                          Performances
                        </a>
                      </li>
                      <li>
                        <a href="/history" className="font-style">
                          History of the theatre
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="active">
                    <a href="/schedule" className="font-style">
                      Poster and tickets
                    </a>
                  </li>
                  <li className="active">
                    <a href="/contacts" className="font-style">
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
