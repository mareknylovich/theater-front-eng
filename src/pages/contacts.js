import React from 'react';
import Head from 'next/head';

const ContactsPage = () => {
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="/style/app.css?v=3" />
      </Head>
      <main className="page-content">
        <section className="section-md bg-default">
          <div className="container">
            <div className="row row-50">
              <div className="col-md-7 col-lg-7">
                <h4 className="heading-decorated">Kontakt</h4>
                <ul className="list-sm contact-info">
                  <li>
                    <dl className="list-terms-inline">
                      <dt>Adressen</dt>
                      <br />
                      Voetbalstraat 22, 1012 XL Amsterdam
                      <br />
                      Witte de Withstraat 93, 3012 BN Rotterdam
                      <br />
                      Rabbijn Maarsenplein 7, 2512 HJ Den Haag
                      <br />
                      Bygdøynesveien 36, 0286 Oslo
                      <br />
                      Kungsgatan 66, 111 22 Stockholm
                      <br />
                      Kungsgatan 8, 411 19 Göteborg
                      <br />
                      Niederdorfstrasse 62, 8001 Zürich
                      <br />
                      Rue de lIndustrie 13, 1201 Genève
                      <br />
                      Kärntner Str. 51, 1010 Wien
                      <br />
                      422 Little Collins St, Melbourne VIC 3000
                      <br />
                      Shop RG05, 500 George St, Sydney NSW 2000
                      <br />
                      100 Simcoe St C111, Toronto
                      <br />
                      1010 Sainte-Catherine O, Montréal, QC H3B 3S3
                      <br />
                      800 Macleod Trail SE, Calgary, AB T2G 5E6
                      <br />
                      <br />
                      <br />
                      <dd></dd>
                    </dl>
                  </li>
                </ul>
                <br />
                <div className="font-18">
                  <p>&nbsp;</p>
                  <p>
                    <img alt="" src="/svg/tic.svg" style={{ marginRight: '10px', width: '25px' }} />
                    <strong>ЗTickets can be booked and refunded online.</strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Complaints and suggestions: <strong>theater-world@outlook.com</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default ContactsPage;
