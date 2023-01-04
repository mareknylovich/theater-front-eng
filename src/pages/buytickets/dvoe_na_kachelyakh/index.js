import React from 'react';
import Head from 'next/head';

const TicketPage = () => {
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="/style/app.css?v=3" />
      </Head>
      <main className="page-content">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n        .slick-gallery .carousel-parent {\n            margin-bottom: 0 !important;\n        }\n        \n        .slick-slider {\n            padding-bottom: 0 !important;\n        }\n        \n        .item {\n            margin: 0 !important;\n        }\n    ',
          }}
        />
        <section className="section-lg bg-default text-center">
          <div className="container">
            <h1 style={{ color: '#000' }}>Two on a swing</h1>
            <h6 style={{ color: '#000' }}>William Gibson</h6>
            <h6 style={{ color: '#000' }}>lyrical drama, 16+</h6>
            <button id="booking" className="button button-primary" style={{ marginTop: '15px' }}>
              Buy ticket
            </button>
            <br />
            <br />
            <div className="slick-gallery">
              <div
                className="slick-slider carousel-parent"
                data-arrows="false"
                data-loop="false"
                data-dots="false"
                data-swipe="true"
                data-items={1}
                data-child="#child-carousel"
                data-for="#child-carousel"
                data-lightgallery="group"
              >
                <div className="item">
                  <img src="/storage/images/aAYLlcp2PRJAQS9V6CowIniYSttSGuvJa3yY.jpeg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-md bg-default text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="row text-left">
                  <div className="col-md-12">
                    <p></p>
                    <p>
                      <strong>Performance</strong>&nbsp;— Honoured artist of the Ukraine, winner of the
                      Stanislavsky Prize. K.&nbsp;S.&nbsp;Stanislavsky Veniamin Filshtinsky
                    </p>
                    <p>
                      <strong>Scenography</strong>&nbsp;- Vladimir Firer, Honoured Artist of Ukraine
                    </p>
                    <p>
                      <strong>Choreography</strong>&nbsp;- Sergey Gritsay, Honoured Artist of the
                      Ukraine, Laureate of the Russian State Prize
                    </p>
                    <p>
                      <strong>Costumes</strong>&nbsp;- Angelika Verkeenko
                    </p>
                    <p>
                      <strong>Lighting designer&nbsp;</strong>- Gleb Filshtinsky, winner of the
                      National Theatre Award "Golden Mask
                    </p>
                    <p>
                      <strong>Music design</strong>&nbsp;- Vladimir Bychkovsky
                    </p>
                    <p>
                      <strong>Assistant for the training of actors&nbsp;</strong>- Larissa
                      Gracheva
                    </p>
                    <p />{' '}
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row text-left">
                  <div className="col-md-12">
                    <p></p>
                    <h6>THE PLAY HAS BEEN PERFORMED OVER 150 TIMES!</h6>
                    <p>
                      The&nbsp;stage "Drama Theatre"&nbsp;-legendary Broadway melodrama. Will the divorced dancer
                      dancer and the lawyer abandoned by his wife find their longed-for happiness together?
                      find happiness together? Can they make the right decision when their unhappy
                      love for one woman and his tenderness and care for the other are at war in their hearts?
                      are at war in their hearts? Their relationship is not easy, but their newly discovered
                      sense of life enables them to restore their relationship. They will
                      have to rethink their lives to find an answer.
                    </p>
                    <p>
                      The renowned director Veniamin Filshtinsky raises the play to mythological heights and rhymes it with the love story of Didon and Aeneas.
                      rhymes it with the love story of Didon and Aeneas.
                    </p>
                    <h5>Awards</h5>
                    <ul className="list-marked">
                      <li>
                        The production&nbsp;-- Winner of the &amp;lquo;Golden Sofit" High Theatre Award
                        for&nbsp; "Best Ensemble"&nbsp;- Elena Kalinina and&nbsp;Dmitry Vorobiev (2005).
                      </li>
                      <li>The production took part in the Prague Theatre Season 2007.</li>
                    </ul>
                    <h5>The facts</h5>
                    <ul className="list-marked">
                      <li>
                        Until 2013, the role of Geri was played by Dmitry Vorobiev, until 2019 by Oleg
                        Fedorov.
                      </li>
                      <li>
                        The production&nbsp;-is based on the legendary Broadway play. The New York
                        premiere had more than 750 (!) performances starring the handsome Hollywood star
                        Henry Fonda and sultry Anne Bancroft in the leading roles.
                      </li>
                    </ul>
                    <p />{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-md bg-default text-center">
          <div className="container">
            <div className="row row-50 justify-content-md-center justify-content-lg-start">
              <div className="col-md-6">
                <article className="blurb blurb-minimal">
                  <div className="unit flex-row unit-spacing-md justify-content-performance">
                    <div className="unit-left">
                      <div className="blurb-minimal__icon">
                        <svg
                          xmlns="https://www.w3.org/2000/svg"
                          id="Outline"
                          viewBox="0 0 64 64"
                          width={32}
                          height={32}
                        >
                          <path
                            d="M61,2H3A1,1,0,0,0,2,3V33a1,1,0,0,0,1,1H61a1,1,0,0,0,1-1V3A1,1,0,0,0,61,2ZM42,28V26a3.984,3.984,0,0,0-1.619-3.195A2.972,2.972,0,0,0,41,21a3,3,0,0,0-6,0,2.972,2.972,0,0,0,.619,1.8A3.984,3.984,0,0,0,34,26v2H30V26a3.984,3.984,0,0,0-1.619-3.195A2.972,2.972,0,0,0,29,21a3,3,0,0,0-6,0,2.972,2.972,0,0,0,.619,1.8A3.984,3.984,0,0,0,22,26v2H13V26.243a11.154,11.154,0,0,0-2.633-7.231A17.918,17.918,0,0,0,14.976,7.467l1.225.49A42.349,42.349,0,0,0,32,11,42.367,42.367,0,0,0,47.8,7.958l1.225-.491a17.918,17.918,0,0,0,4.609,11.545A11.154,11.154,0,0,0,51,26.243V28Zm-5-7a1,1,0,1,1,1,1A1,1,0,0,1,37,21Zm-1,5a2,2,0,0,1,4,0v2H36ZM25,21a1,1,0,1,1,1,1A1,1,0,0,1,25,21Zm-1,5a2,2,0,0,1,4,0v2H24ZM4,20H8.559A9.172,9.172,0,0,1,11,26.243V28H4Zm49,6.243A9.172,9.172,0,0,1,55.441,20H60v8H53ZM60,18H55.441A15.953,15.953,0,0,1,51,6.929V4h9ZM49,5.323,47.056,6.1A40.357,40.357,0,0,1,32,9,40.357,40.357,0,0,1,16.944,6.1L15,5.323V4H49ZM13,4V6.929A15.953,15.953,0,0,1,8.559,18H4V4ZM60,32H4V30H60Z"
                            style={{ fill: '#e3000e' }}
                          />
                          <path
                            d="M57,39v3H55V39a3,3,0,0,0-3-3H48a3,3,0,0,0-3,3v3H43V39a3,3,0,0,0-3-3H36a3,3,0,0,0-3,3v3H31V39a3,3,0,0,0-3-3H24a3,3,0,0,0-3,3v3H19V39a3,3,0,0,0-3-3H12a3,3,0,0,0-3,3v3H7V39a3,3,0,0,0-3-3H2v2H4a1,1,0,0,1,1,1v7H2v2H62V46H59V39a1,1,0,0,1,1-1h2V36H60A3,3,0,0,0,57,39ZM7,44H9v2H7Zm4-5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7H11Zm8,5h2v2H19Zm4-5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7H23Zm8,5h2v2H31Zm4-5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7H35Zm8,5h2v2H43Zm4-5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7H47Zm8,5h2v2H55Z"
                            style={{ fill: '#e3000e' }}
                          />
                          <path
                            d="M57,53v3H55V53a3,3,0,0,0-3-3H48a3,3,0,0,0-3,3v3H43V53a3,3,0,0,0-3-3H36a3,3,0,0,0-3,3v3H31V53a3,3,0,0,0-3-3H24a3,3,0,0,0-3,3v3H19V53a3,3,0,0,0-3-3H12a3,3,0,0,0-3,3v3H7V53a3,3,0,0,0-3-3H2v2H4a1,1,0,0,1,1,1v7H2v2H62V60H59V53a1,1,0,0,1,1-1h2V50H60A3,3,0,0,0,57,53ZM7,58H9v2H7Zm4-5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7H11Zm8,5h2v2H19Zm4-5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7H23Zm8,5h2v2H31Zm4-5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7H35Zm8,5h2v2H43Zm4-5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7H47Zm8,5h2v2H55Z"
                            style={{ fill: '#e3000e' }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="unit-body">
                      <p className="blurb__title heading-6">Premiere</p>
                      <p></p>
                      <p>28 December 2004</p>
                      <p />
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6">
                <article className="blurb blurb-minimal">
                  <div className="unit flex-row unit-spacing-md justify-content-performance">
                    <div className="unit-left">
                      <div className="blurb-minimal__icon">
                        <svg
                          xmlns="https://www.w3.org/2000/svg"
                          xmlnsXlink="https://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 511.992 511.992"
                          style={{ enableBackground: 'new 0 0 511.992 511.992' }}
                          xmlSpace="preserve"
                          width={32}
                          height={32}
                        >
                          <g id="XMLID_806_">
                            <g id="XMLID_386_">
                              <path
                                id="XMLID_389_"
                                d="M511.005,279.646c-4.597-46.238-25.254-89.829-58.168-122.744    c-28.128-28.127-62.556-46.202-98.782-54.239V77.255c14.796-3.681,25.794-17.074,25.794-32.993c0-18.748-15.252-34-34-34h-72    c-18.748,0-34,15.252-34,34c0,15.918,10.998,29.311,25.793,32.993v25.479c-36.115,8.071-70.429,26.121-98.477,54.169    c-6.138,6.138-11.798,12.577-16.979,19.269c-0.251-0.019-0.502-0.038-0.758-0.038H78.167c-5.522,0-10,4.477-10,10s4.478,10,10,10    h58.412c-7.332,12.275-13.244,25.166-17.744,38.436H10c-5.522,0-10,4.477-10,10s4.478,10,10,10h103.184    c-2.882,12.651-4.536,25.526-4.963,38.437H64c-5.522,0-10,4.477-10,10s4.478,10,10,10h44.54    c0.844,12.944,2.925,25.82,6.244,38.437H50c-5.522,0-10,4.477-10,10s4.478,10,10,10h71.166    c9.81,25.951,25.141,50.274,45.999,71.132c32.946,32.946,76.582,53.608,122.868,58.181c6.606,0.652,13.217,0.975,19.819,0.975    c39.022,0,77.548-11.293,110.238-32.581c4.628-3.014,5.937-9.209,2.923-13.837s-9.209-5.937-13.837-2.923    c-71.557,46.597-167.39,36.522-227.869-23.957c-70.962-70.962-70.962-186.425,0-257.388c70.961-70.961,186.424-70.961,257.387,0    c60.399,60.4,70.529,156.151,24.086,227.673c-3.008,4.632-1.691,10.826,2.94,13.833c4.634,3.008,10.826,1.691,13.833-2.941    C504.367,371.396,515.537,325.241,511.005,279.646z M259.849,44.263c0-7.72,6.28-14,14-14h72c7.72,0,14,6.28,14,14s-6.28,14-14,14    h-1.794h-68.413h-1.793C266.129,58.263,259.849,51.982,259.849,44.263z M285.642,99.296V78.263h48.413v20.997    C317.979,97.348,301.715,97.36,285.642,99.296z"
                                style={{ fill: '#e3000e' }}
                              />
                              <path
                                id="XMLID_391_"
                                d="M445.77,425.5c-2.64,0-5.21,1.07-7.069,2.93c-1.87,1.86-2.931,4.44-2.931,7.07    c0,2.63,1.061,5.21,2.931,7.07c1.859,1.87,4.43,2.93,7.069,2.93c2.63,0,5.2-1.06,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07    c0-2.63-1.069-5.21-2.93-7.07C450.97,426.57,448.399,425.5,445.77,425.5z"
                                style={{ fill: '#e3000e' }}
                              />
                              <path
                                id="XMLID_394_"
                                d="M310.001,144.609c-85.538,0-155.129,69.59-155.129,155.129s69.591,155.129,155.129,155.129    s155.129-69.59,155.129-155.129S395.539,144.609,310.001,144.609z M310.001,434.867c-74.511,0-135.129-60.619-135.129-135.129    s60.618-135.129,135.129-135.129S445.13,225.228,445.13,299.738S384.512,434.867,310.001,434.867z"
                                style={{ fill: '#e3000e' }}
                              />
                              <path
                                id="XMLID_397_"
                                d="M373.257,222.34l-49.53,49.529c-4.142-2.048-8.801-3.205-13.726-3.205c-4.926,0-9.584,1.157-13.726,3.205    l-22.167-22.167c-3.906-3.905-10.236-3.905-14.143,0c-3.905,3.905-3.905,10.237,0,14.142l22.167,22.167    c-2.049,4.142-3.205,8.801-3.205,13.726c0,17.134,13.939,31.074,31.074,31.074s31.074-13.94,31.074-31.074    c0-4.925-1.157-9.584-3.205-13.726l48.076-48.076v0l1.453-1.453c3.905-3.905,3.905-10.237,0-14.142    S377.164,218.435,373.257,222.34z M310.001,310.812c-6.106,0-11.074-4.968-11.074-11.074s4.968-11.074,11.074-11.074    s11.074,4.968,11.074,11.074S316.107,310.812,310.001,310.812z"
                                style={{ fill: '#e3000e' }}
                              />
                              <path
                                id="XMLID_398_"
                                d="M416.92,289.86h-9.265c-5.522,0-10,4.477-10,10s4.478,10,10,10h9.265c5.522,0,10-4.477,10-10    S422.442,289.86,416.92,289.86z"
                                style={{ fill: '#e3000e' }}
                              />
                              <path
                                id="XMLID_399_"
                                d="M212.346,289.616h-9.264c-5.522,0-10,4.477-10,10s4.478,10,10,10h9.264c5.522,0,10-4.477,10-10    S217.868,289.616,212.346,289.616z"
                                style={{ fill: '#e3000e' }}
                              />
                              <path
                                id="XMLID_400_"
                                d="M310.123,212.083c5.522,0,10-4.477,10-10v-9.264c0-5.523-4.478-10-10-10s-10,4.477-10,10v9.264    C300.123,207.606,304.601,212.083,310.123,212.083z"
                                style={{ fill: '#e3000e' }}
                              />
                              <path
                                id="XMLID_424_"
                                d="M309.879,387.393c-5.522,0-10,4.477-10,10v9.264c0,5.523,4.478,10,10,10s10-4.477,10-10v-9.264    C319.879,391.87,315.401,387.393,309.879,387.393z"
                                style={{ fill: '#e3000e' }}
                              />
                              <path
                                id="XMLID_425_"
                                d="M10,351.44c-2.63,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07c0,2.64,1.069,5.21,2.93,7.07    s4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07s-1.07-5.21-2.931-7.07    C15.21,352.51,12.63,351.44,10,351.44z"
                                style={{ fill: '#e3000e' }}
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="unit-body">
                      <p className="blurb__title heading-6">Duration</p>
                      <p></p>
                      <p>1 hour and 30 minutes with one break</p>
                      <p />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="section-md bg-gray-lighter text-center">
          <div className="container">
            <div className="row justify-content-lg-center">
              <div className="col-lg-10 col-xl-8">
                <h4 className="heading-decorated">Actors and performers</h4>
              </div>
            </div>
            <div className="row row-50">
              <div className="col-md-6 col-lg-3">
                <article className="blurb blurb-circle blurb-circle_centered open-actor-win-js">
                  <div className="blurb-circle__icon">
                    <span className="text-center">
                      <a
                        className="img-bg-custom"
                        data-actorid={1}
                        style={{
                          backgroundImage: 'url("/storage/images/36IhkgjTbmJ0iiLzEwDoyuhJtToH1y4SwwjV.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Artyom Zypin</span>
                  </h6>
                  <div className="unit-body">
                    <span>Jerry</span>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-3">
                <article className="blurb blurb-circle blurb-circle_centered open-actor-win-js">
                  <div className="blurb-circle__icon">
                    <span className="text-center">
                      <a
                        className="img-bg-custom"
                        data-actorid={1}
                        style={{
                          backgroundImage: 'url("/storage/images/mUnxhEsG04xnNrk41FF7WFTNUiOFPWw5lK2c.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Elena Kalinina</span>
                  </h6>
                  <div className="unit-body">
                    <span>Gitel</span>
                  </div>
                </article>
              </div>{' '}
            </div>
          </div>
        </section>
        <section className="section-lg bg-default text-center" data-lightgallery="group">
          <div className="container-fluid">
            <h4 className="heading-decorated">Foto</h4>
            <div className="row no-gutters">
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/w2Cbt7WQqeq42wtCeFSdzLjZIBJaUIhsLC8F.jpeg"
                  style={{ background: 'url("/storage/images/w2Cbt7WQqeq42wtCeFSdzLjZIBJaUIhsLC8F.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/w2Cbt7WQqeq42wtCeFSdzLjZIBJaUIhsLC8F.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/QCZ3mPh6KKD9pIiWsFDvIasX4TGI0Cb9zgXV.jpeg"
                  style={{ background: 'url("/storage/images/QCZ3mPh6KKD9pIiWsFDvIasX4TGI0Cb9zgXV.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/QCZ3mPh6KKD9pIiWsFDvIasX4TGI0Cb9zgXV.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/AHYycKVk9DENQWEd3lxWrfLEGfxZYkBLVqLO.jpeg"
                  style={{ background: 'url("/storage/images/AHYycKVk9DENQWEd3lxWrfLEGfxZYkBLVqLO.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/AHYycKVk9DENQWEd3lxWrfLEGfxZYkBLVqLO.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/a4Hk5p3Cr5JTKkG9dh8XEdH0Sz7Lmgna8MFF.jpeg"
                  style={{ background: 'url("/storage/images/a4Hk5p3Cr5JTKkG9dh8XEdH0Sz7Lmgna8MFF.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/a4Hk5p3Cr5JTKkG9dh8XEdH0Sz7Lmgna8MFF.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/PdUTLy5agdkHnQLJeuNn05W7Z8kk6rOtAWLb.jpeg"
                  style={{ background: 'url("/storage/images/PdUTLy5agdkHnQLJeuNn05W7Z8kk6rOtAWLb.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/PdUTLy5agdkHnQLJeuNn05W7Z8kk6rOtAWLb.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/wei7pV2FQBwebeGWJafKEUnXYgVZ7sdlgCj8.jpeg"
                  style={{ background: 'url("/storage/images/wei7pV2FQBwebeGWJafKEUnXYgVZ7sdlgCj8.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/wei7pV2FQBwebeGWJafKEUnXYgVZ7sdlgCj8.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/qtkkZ6tEfhbpwIqc6ex98dBbeovhvw5JBvlj.jpeg"
                  style={{ background: 'url("/storage/images/qtkkZ6tEfhbpwIqc6ex98dBbeovhvw5JBvlj.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/qtkkZ6tEfhbpwIqc6ex98dBbeovhvw5JBvlj.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/aaBP6V0P2zbK5rhGRawbcujJkljuZyjVhAld.jpeg"
                  style={{ background: 'url("/storage/images/aaBP6V0P2zbK5rhGRawbcujJkljuZyjVhAld.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/aaBP6V0P2zbK5rhGRawbcujJkljuZyjVhAld.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/FXEHTJTLpIBWcROBHT35M3VX7xXy7qU5EaO0.jpeg"
                  style={{ background: 'url("/storage/images/FXEHTJTLpIBWcROBHT35M3VX7xXy7qU5EaO0.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/FXEHTJTLpIBWcROBHT35M3VX7xXy7qU5EaO0.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/vjL4NB7NN2A0WWR7cmVYj6dxKn9gUcbs3i7U.jpeg"
                  style={{ background: 'url("/storage/images/vjL4NB7NN2A0WWR7cmVYj6dxKn9gUcbs3i7U.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/vjL4NB7NN2A0WWR7cmVYj6dxKn9gUcbs3i7U.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/tNtGSzZp1AzBGjj9oSe9MgmZvMO20Y6etg0b.jpeg"
                  style={{ background: 'url("/storage/images/tNtGSzZp1AzBGjj9oSe9MgmZvMO20Y6etg0b.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/tNtGSzZp1AzBGjj9oSe9MgmZvMO20Y6etg0b.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/nCFgqB8HQVgKz8Zjjn1mKYtRQPIXbivZ0Xwi.jpeg"
                  style={{ background: 'url("/storage/images/nCFgqB8HQVgKz8Zjjn1mKYtRQPIXbivZ0Xwi.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/nCFgqB8HQVgKz8Zjjn1mKYtRQPIXbivZ0Xwi.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/bstcRwtFIhxs5s8H8frotDaQ1RImfj1rXBHT.jpeg"
                  style={{ background: 'url("/storage/images/bstcRwtFIhxs5s8H8frotDaQ1RImfj1rXBHT.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/bstcRwtFIhxs5s8H8frotDaQ1RImfj1rXBHT.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/zYXIX9O7r4IQ7ms3ABZhfsMK2gOpZ5iiFbvC.jpeg"
                  style={{ background: 'url("/storage/images/zYXIX9O7r4IQ7ms3ABZhfsMK2gOpZ5iiFbvC.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/zYXIX9O7r4IQ7ms3ABZhfsMK2gOpZ5iiFbvC.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/SvLxhcyFGJdnnhzfrK8Ar1CijSB18XF2ZVwY.jpeg"
                  style={{ background: 'url("/storage/images/SvLxhcyFGJdnnhzfrK8Ar1CijSB18XF2ZVwY.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/SvLxhcyFGJdnnhzfrK8Ar1CijSB18XF2ZVwY.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  className="thumb-modern bg-img"
                  data-lightgallery="item"
                  href="/storage/images/cwfVlkurdrAN7aRFcIIxzdv94ChxAAPjJvfM.jpeg"
                  style={{ background: 'url("/storage/images/cwfVlkurdrAN7aRFcIIxzdv94ChxAAPjJvfM.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/cwfVlkurdrAN7aRFcIIxzdv94ChxAAPjJvfM.jpeg"
                      alt=""
                      width={418}
                      height={315}
                    />
                  </figure>
                  <div className="thumb-modern__overlay" />
                </a>
              </div>{' '}
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default TicketPage;
