import React from 'react';
import Head from 'next/head';

const TheatrePage = () => {
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="/style/app.css?v=3" />
      </Head>
      <main className="page-content">
        <section>
          <div className="container">
            <br />
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="heading-decorated">The Theatre</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 col-lg-6" style={{ marginBottom: '20px' }}>
                    <h5>Repertoire</h5>
                    <p>
                      Every performance is a surprise and an experiment. The poster contains all the
                      audience's favourite genres: from warm melodramas to topical comedies.
                      In the "Playhouse of them. Fadeeva" you will surely see a performance that will
                      will remain in your heart.&nbsp;
                      <a href="/performances">About theatre performances →</a>
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <h5>Artists</h5>
                    <p>
                      "Dramatic Theatre" is the first state repertory theatre 
                      without a permanent troupe. Each performance of the theatre creates a unique
                      team, the best artists from St. Petersburg and Moscow are invited to play the roles.{' '}
                      <a href="/actors">About artists →</a>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-6" style={{ marginBottom: '20px' }}>
                    <h5>Cafe</h5>
                    <p>
                      What is on the poster today? "Ghosts" or "Onegin"? For each premiere we dedicate a
                      Cocktail with a special recipe. And we also offer 10 types of snacks that are
                      suitable for every drink. If you are late for the theatre, you can take a deep breath in the
                      Café, where the performance is broadcast live on the big screen.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <h5>Foyer</h5>
                    <p>
                      The interior of the theatre was completely renovated in 2016 and is designed in the style of restrained Scandinavian minimalism.
                      Scandinavian minimalist style. On the walls of the first floor
                      floor is an exhibition of portraits of legendary artists who have taken the stage
                      the stage of the theatre at various times. On the second floor there are
                      two areas, photos of which will embellish your social networks and provide a warm
                      a warm memory of a visit to the theatre.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-6" style={{ marginBottom: '20px' }}>
                    <h5>The scene</h5>
                    <p>
                      The technical possibilities allow us to transform the stage into a spaceship, a
                      multimedia room or a stylish interior of a hotel in the Mexican resort of
                      resort of Cancun.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <h5>Creative encounters</h5>
                    <p>
                      The theatre's audience can join the club and participate in closed
                      events with directors and actors and receive special offers.
                      receive. Details and questionnaire at the theatre box office.
                    </p>
                  </div>
                </div>
                <p>&nbsp;</p>
              </div>
            </div>
            <br />
          </div>
        </section>
      </main>
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

export default TheatrePage;
