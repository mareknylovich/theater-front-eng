import React from 'react';
import Head from 'next/head';

const HomePage = () => {
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="/style/app.css?v=3" />
      </Head>
      <main className="page-content">
        <section>
          <div
            className="swiper-container swiper-slider swiper-slider_fullheight"
            data-simulate-touch="false"
            data-loop="false"
            data-autoplay={5500}
          >
            <div className="swiper-wrapper">
              <div
                className="swiper-slide context-dark bg-overlay-darker"
                data-slide-bg="/storage/images/ZUSU95LlPrh14kf4okOvfCVuZN5l6C07AycX.jpeg"
                style={{
                  backgroundImage: 'url("storage/images/ZUSU95LlPrh14kf4okOvfCVuZN5l6C07AycX.jpeg")',
                  backgroundSize: 'cover',
                  width: '783px',
                }}
              >
                <div className="swiper-slide-caption text-center">
                  <div className="container">
                    <div
                      data-caption-animate="fadeInUpSmall f30px"
                      style={{ cursor: 'pointer' }}
                      data-caption-delay={200}
                    >
                      <span style={{ color: 'red' }}>Premiere</span>
                    </div>
                    <h2 data-caption-animate="fadeInUpSmall" className="slider-title">
                      <span className="white-color" style={{ cursor: 'pointer' }}>
                        Three comrades
                      </span>
                    </h2>
                    <div
                      data-caption-animate="fadeInUpSmall f30px"
                      data-caption-delay={200}
                      className="fadeInUpSmall f30px animated"
                      style={{ cursor: 'pointer' }}
                    >
                      <p>What the Ballet Keeps Silent About, 18+</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide context-dark bg-overlay-darker"
                data-slide-bg="/storage/images/24nBWJLcFNM9QGXOiyYEndn0h0iQfcg9ZWVr.jpeg"
                style={{
                  backgroundImage: 'url("storage/images/24nBWJLcFNM9QGXOiyYEndn0h0iQfcg9ZWVr.jpeg")',
                  backgroundSize: 'cover',
                  width: '783px',
                }}
              >
                <div className="swiper-slide-caption text-center">
                  <div className="container">
                    <h2 data-caption-animate="fadeInUpSmall" className="slider-title">
                      <span className="white-color" style={{ cursor: 'pointer' }}>
                        Fantasies by Faryatyev
                      </span>
                    </h2>
                    <div
                      data-caption-animate="fadeInUpSmall f30px"
                      data-caption-delay={200}
                      className="fadeInUpSmall f30px animated"
                      style={{ cursor: 'pointer' }}
                    >
                      <p>TRAGICOMEDY, 16+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
              <span className="swiper-pagination-bullet" style={{ display: 'block' }} />
            </div>
            <div className="swiper-button-prev linear-icon-chevron-left" />
            <div className="swiper-button-next linear-icon-chevron-right" />
          </div>
        </section>
        <section className="section-lg bg-default text-center">
          <div className="container">
            <div className="row justify-content-xl-center row-50">
              <div className="col-xl-9">
                <h4 className="heading-decorated">Recommend</h4>
              </div>
            </div>
            <div className="row row-50">
              <div className="col-md-3">
                <div className="thumb thumb-corporate">
                  <div className="thumb-corporate__main">
                    <a href="/schedule">
                      <img
                        src="/storage/images/FpxeYzatlxepT2UdqVuCZleck3TQimp2TBh3.jpeg"
                        style={{ position: 'relative' }}
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    <p className="thumb__title">
                      <a href="/schedule">Fantasies by Faryatyev</a>
                    </p>
                  </div>
                  <p className="auth-fonts">Alla Sokolova, Tragicomedy, 16+</p>
                  <br />
                  <a className="button button-primary" href="/schedule">
                    Buy ticket
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="thumb thumb-corporate">
                  <div className="thumb-corporate__main">
                    <a href="/schedule">
                      <img
                        src="/storage/images/aAYLlcp2PRJAQS9V6CowIniYSttSGuvJa3yY.jpeg"
                        style={{ position: 'relative' }}
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    <p className="thumb__title">
                      <a href="/schedule">Two on a swing</a>
                    </p>
                  </div>
                  <p className="auth-fonts">William Gibson, lyrisches Drama, 16+</p>
                  <br />
                  <a className="button button-primary" href="/schedule">
                    Buy ticket
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="thumb thumb-corporate">
                  <div className="thumb-corporate__main">
                    <a href="/schedule">
                      <img
                        src="/storage/images/NzSUlLcwYImLaTjpNoUPs9c4VbgsaCZA3wOa.jpeg"
                        style={{ position: 'relative' }}
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    <p className="thumb__title">
                      <a href="/schedule">Good. Very!</a>
                    </p>
                  </div>
                  <p className="auth-fonts">Vasily Shukshin, eine urkomisch lustige Komödie, 16+</p>
                  <br />
                  <a className="button button-primary" href="/schedule">
                    Buy ticket
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="thumb thumb-corporate">
                  <div className="thumb-corporate__main">
                    <a href="/schedule">
                      <img
                        src="/storage/images/207P9Bt68ZuryH8vh7NkzTNPkdBLT8mehTkH.jpeg"
                        style={{ position: 'relative' }}
                      />
                    </a>
                  </div>
                  <div className="thumb-corporate__caption">
                    <p className="thumb__title">
                      <a href="/schedule">Casanova</a>
                    </p>
                  </div>
                  <p className="auth-fonts">Nach den Werken von Marina Tsvetaeva, Liebesgeschichte, 16+</p>
                  <br />
                  <a className="button button-primary" href="/schedule">
                    Buy ticket
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-lg bg-default text-center">
          <div className="container">
            <div className="row justify-content-xl-center row-50">
              <div className="col-xl-9">
                <h4 className="heading-decorated">Premieres</h4>
              </div>
            </div>
            <div className="row row-50">
              <div className="owl-carousel owl-theme2">
                <div className="item" style={{ marginRight: '15px' }}>
                  <div className="thumb thumb-corporate">
                    <div className="thumb-corporate__main">
                      <span
                        className="spec_show spec_show_slider"
                        style={{ position: 'absolute', zIndex: 100 }}
                      >
                        Premiere
                      </span>
                      <a href="/schedule">
                        <img
                          src="/storage/images/mqjQ7sdMMAYP8y4OsPsc1mPD0UDKSuuWx3MQ.jpeg"
                          style={{ position: 'relative' }}
                        />
                      </a>
                    </div>
                    <div className="thumb-corporate__caption">
                      <p className="thumb__title">
                        <a href="/schedule">Three comrades</a>
                      </p>
                    </div>
                    <p>Yuri Smekalov, Alexander Tsypkin, worüber das Ballett schweigt, 18+</p>
                    <br />
                    <a className="button button-primary" href="/schedule">
                      Buy ticket
                    </a>
                  </div>
                </div>
                <div className="item" style={{ marginRight: '15px' }}>
                  <div className="thumb thumb-corporate">
                    <div className="thumb-corporate__main">
                      <span
                        className="spec_show spec_show_slider"
                        style={{ position: 'absolute', zIndex: 100 }}
                      >
                        Premiere
                      </span>
                      <a href="/schedule">
                        <img
                          src="/storage/images/8ttkKImpXCR3HdsRKEy8G1dqyhv0IMd2nu2x.jpeg"
                          style={{ position: 'relative' }}
                        />
                      </a>
                    </div>
                    <div className="thumb-corporate__caption">
                      <p className="thumb__title">
                        <a href="/schedule">Crime and punishment</a>
                      </p>
                    </div>
                    <p>Fjodor Dostojewski, Theaterstück von Konstantin Bogomolov, 18+</p>
                    <br />
                    <a className="button button-primary" href="/schedule">
                      Buy ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section parallax-container context-dark">
          <div className="material-parallax parallax">
            <img
              src="/storage/images/visit.jpg"
              alt=""
              style={{ display: 'block', transform: 'translate3d(-50%, 268px, 0px)' }}
            />
          </div>
          <div className="parallax-content">
            <div className="section-lg">
              <div className="container">
                <div className="row justify-content-sm-center justify-content-lg-end row-30">
                  <div className="col-sm-10 col-md-7 col-lg-6 white-color">
                    <h3 className="white-color">Your visit</h3>
                    <p>
                      All useful information on one page: how to buy tickets and get gifts, how to get to the
                      how to get to the theatre and how to have a pleasant stay at the theatre.
                      have.
                    </p>
                    <a className="button button-primary" href="visit">
                      Learn more
                    </a>
                  </div>
                  <div className="col-sm-10 col-md-5 col-lg-6" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-lg bg-default text-center">
          <div className="container">
            <div className="row justify-content-xxl-around row-50"></div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
