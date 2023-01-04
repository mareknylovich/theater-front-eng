import React from 'react';

export const FooterView = () => {
  return (
    <React.Fragment>
      <section className="pre-footer-corporate bg-image-7 bg-overlay-darkest">
        <div className="container">
          <div className="row justify-content-sm-center justify-content-lg-start row-30 row-md-60">
            <div className="col-sm-10 col-md-6 col-lg-10 col-xl-3">
              <h6 className="white-color">About the theatre</h6>
              <p></p>
              <p>
                "The Drama Theatre of the Refugees from Ukraine " - the first state repertory of the
                Ukraine without a permanent troupe. The theatre's repertoire includes more than 20 performances,
                both recognised masterpieces of Russian and world literature and modern drama.
              </p>
              <p />
            </div>
            <div className="col-sm-10 col-md-6 col-lg-3 col-xl-3">
              <h6 className="white-color">Navigation</h6>
              <ul className="list-xxs">
                <li>
                  <a href="/theatr">The Theatre</a>
                </li>
                <li>
                  <a href="/schedule">Programme booklet and tickets</a>
                </li>
                <li>
                  <a href="/visit">A visit to the theatre</a>
                </li>

                <li>
                  <a href="/contacts">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-corporate bg-gray-darkest">
        <div className="container">
          <div className="footer-corporate__inner">
            <p className="rights">© 2022 Drama Theatre Refugee Drama Theatre from Ukraine</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
