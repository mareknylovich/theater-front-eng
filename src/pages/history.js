import React from 'react';
import Head from 'next/head';

const HistoryPage = () => {
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
                <h1 className="heading-decorated">History of the theatre</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>
                  The Refugee Drama Theatre from Ukraine was founded in 2020 by actors from Ukraine.
                  a group of people was founded who wanted to continue to perform, play their
                  favourite roles and wanted to inspire the audience with their performances.
                </p>
                <p>
                  Now our theatre already has a large cast of actors. Because of the war in
                  Ukraine, most of the actors are forced to leave their homes. But even
                  situation we try not to despair and to find the positive sides.
                  sides
                </p>
                <p>
                  We donate most of the theatre's profits to charity funds of the Urain army.
                  Army. We are sure that art and love will defeat our common enemy and aggressor!
                  will defeat!
                </p>
                <p>&nbsp;</p>
              </div>
            </div>
            <br />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default HistoryPage;
