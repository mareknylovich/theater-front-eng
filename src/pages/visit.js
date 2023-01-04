import React from 'react';
import Head from 'next/head';

const VisitPage = () => {
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="/style/app.css?v=3" />
      </Head>
      <div>
        <main className="page-content">
          <section>
            <div className="container">
              <br />
              <div className="row">
                <div className="col-md-12 text-center">
                  <h4 className="heading-decorated">Visit to the theatre</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p>
                    The doors of the theatre open at 12:00. At the same time the
                    Theatre Café, where you can enjoy light snacks, hot and cold drinks.
                  </p>
                  <p>
                    The bar offers an excellent selection of drinks and special cocktails based on
                    based on our performances.
                  </p>
                </div>
              </div>
              <br />
            </div>
          </section>
          <section>
            <div className="container">
              <br />
              <div className="row">
                <div className="col-md-12 text-center">
                  <h4 className="heading-decorated">HOW TO BUY A TICKET</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h6 style={{ textAlign: 'center' }}>Auf der Website des Theaters</h6>
                  <p>
                    Every time you buy tickets on our website, you will receive a cashback of
                    10% of the purchase amount, which can be spent when buying tickets as Theatre ".
                    Vasilyev", so also in other theatres. More information in the online chat on the
                    website.
                  </p>
                  <h6 style={{ textAlign: 'center' }}>ZUSCHAUER MIT&amp;NBSP;BEHINDERUNGEN</h6>
                  <p>
                    Theatre "Drama Theatre of Refugees from Ukraine" fully equipped with the
                    necessary equipment to accommodate spectators with&nbsp;disabilities. At your
                    services are: a lift for small groups, a place in the auditorium, a specially
                    specially equipped toilet room.
                  </p>
                  <p>
                    In order to make your visit as pleasant as possible, please contact the theatre administrator 2-3 days before
                    of the performance, please contact the theatre administrator to clarify all details.
                  </p>
                </div>
              </div>
              <br />
            </div>
          </section>
          <section>
            <div className="container">
              <br />
              <div className="row">
                <div className="col-md-12 text-center">
                  <h4 className="heading-decorated">Special offer</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p>
                    <strong>
                      When purchasing tickets on the theatre's website, there is a 10% discount for:
                    </strong>
                  </p>
                  <ul className="list-marked">
                    <li>Hotel guests on site who present an electronic key;</li>
                    <li>ISIC, ITIC, IYTC card holders upon presentation of the card;</li>
                  </ul>
                  <h5 style={{ textAlign: 'center' }}>Studentenclub</h5>
                  <p>
                    Once a month, the club members receive a secret mail to the VC with an
                    invitation to a performance on super terms. And also suggestions from our
                    friends and partners. To join a club, you have to type the code word "
                    Studclub" in an online chat on the website.
                  </p>
                  <p>&nbsp;</p>
                </div>
              </div>
              <br />
              <br />
            </div>
          </section>
        </main>
      </div>
    </React.Fragment>
  );
};

export default VisitPage;
