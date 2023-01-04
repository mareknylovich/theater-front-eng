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
            <h1 style={{ color: '#000' }}>Lear</h1>
            <h6 style={{ color: '#000' }}>Based on William Shakespeare's King Lear</h6>
            <h6 style={{ color: '#000' }}>Tragicomedy, 18+</h6>
            <button id="booking" className="button button-primary" style={{ marginTop: '15px' }}>
              Tragicomedy, 18+
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
                  <img src="/storage/images/h1spXiUDjIhxGQi2PoIk8zFreFYxJP27ItHm.jpeg" />
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
                      <strong>Direction:</strong>&nbsp;— Konstantin Bogomolov
                    </p>
                    <p>
                      <strong>Production designer</strong>&nbsp;— Larisa Lomakina
                    </p>
                    <p />{' '}
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row text-left">
                  <div className="col-md-12">
                    <p></p>
                    <p>
                      Konstantin Bogomolov has transformed William Shakespeare's famous tragedy "King Lear&nbsp;into&nbsp;a black comedy.
                      Lear&nbsp;into&nbsp;a black comedy, by combining in&nbsp;one performance
                      the seemingly&nbsp;unrelated in one performance. The new
                      Lear&nbsp;&nbsp;-is a combination of extreme spectacle mixed with&nbsp;aggressive theatricality.
                      with&nbsp;aggressive theatricality and&nbsp;witty, grotesque acting, with&nbsp;gags and&nbsp;nerve jitters.
                      and&nbsp;thrills, with&nbsp;reflections on&nbsp;the&amp; modern&amp; world
                      and&nbsp;the&amp; place&amp; of&nbsp;man in&amp; this&amp; world.
                    </p>
                    <p>
                      This compelling story in a &nbsp;provocative aesthetic,&nbsp;-ironic.
                      &nbsp;tragic, hard-hitting &nbsp;lyrical at the same time.... "In&nbsp;your eyes I saw
                      I&nbsp;lately, O&nbsp;life: the gold in&nbsp;the night your eyes&nbsp;-
                      shone, and&nbsp;my heart fainted with passionate desire.... Who
                      hated you&nbsp;&nbsp;-captivating, entangling, seducing, seeking, finding! Who has
                      loved thee&nbsp;-the innocent, impatient, fugitive sinner
                      with&nbsp;a child's eyes! ...Then Life looked around thoughtfully and&nbsp;said.
                      softly, "O&nbsp;man, you&nbsp;re not&nbsp;too faithful to me!
                      You&nbsp;haven&nbsp;t loved me&nbsp;as much as you say; I&nbsp;know that
                      you'll leave me soon. And&nbsp;we&nbsp;looked&nbsp;at each other,
                      and looked at the green meadow where the evening chill had fallen,
                      and wept. And&nbsp;then&nbsp;life was dearer to me than ever all my
                      wisdom".
                    </p>
                    <h6>Awards</h6>
                    <ul className="list-marked">
                      <li>Gewinner des National Theatre Award «Golden Mask; für die Spielzeit 2011-2012</li>
                    </ul>
                    <h6>Feste</h6>
                    <ul className="list-marked">
                      <li>Participant in the Ukraine Case programme at the Golden Mask 2012 festival;</li>
                      <li>
                        Participant in the festival for contemporary theatre "Theaterformen" (Hanover,
                        Germany) 2013&nbsp;year;
                      </li>
                      <li>Participant of the International Theatre Arts Forum "Teart" (Minsk, Belarus);</li>
                      <li>Participants in the Marseille Theatre Season", 2013.</li>
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
                      <p>23 September 2011</p>
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
                      <p>1 hours 30 minutes with one brea1</p>
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
                          backgroundImage: 'url("/storage/images/jTknh5QK3pS9jNkzD5YznaMULUVMmSXKxagK.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Roza Khairullina</span>
                  </h6>
                  <div className="unit-body">
                    <span>King Lear</span>
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
                          backgroundImage: 'url("/storage/images/aHcvxEHAMpyP8T98kbkqM5T1tpKNegXtSHJF.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Uliana Fomitschewa</span>
                  </h6>
                  <div className="unit-body">
                    <span>Georg Maximilianowitsch Albani</span>
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
                          backgroundImage: 'url("/storage/images/fJr9LhAd3rLdF4z14ZwskC5vRR4U03KhfwLp.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Gennady Alimpiev</span>
                  </h6>
                  <div className="unit-body">
                    <span>Gonerilla Lirovna Albani, his wife</span>
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
                          backgroundImage: 'url("/storage/images/fy9qnReSWcEMmNBd4IOrRNJfxDx6VnvXOh74.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Daria Moroz</span>
                  </h6>
                  <div className="unit-body">
                    <span>Semyon Mikhailovich Cornwell, General of the Army / Dr Luntz</span>
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
                          backgroundImage: 'url("/storage/images/MT2ybPsf15JpunNUVCoAXQ3x0N0bjs0WI8Q4.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Anton Moschtschkov</span>
                  </h6>
                  <div className="unit-body">
                    <span>Regan Lirovna Cornwell, his wife</span>
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
                          backgroundImage: 'url("/storage/images/0o3dTqkbZWGxlEFNLwtcLse0lLe8xcAnKtJh.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Pavel Tschinarew</span>
                  </h6>
                  <div className="unit-body">
                    <span>Cordelia Lear, Lear's youngest daughter</span>
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
                          backgroundImage: 'url("/storage/images/JzxlfVcC4pxcLhWPShQ5AAcbALcVVpsQzGDC.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Tatyana Bondarewa</span>
                  </h6>
                  <div className="unit-body">
                    <span>
                      Mr Zarathustra, European ambassador on our side / Prophet Zarathustra,
                      psychiatric special patient
                    </span>
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
                          backgroundImage: 'url("/storage/images/iJLMbHF5PC0JM8GZJvWjNX1g23vZ0M1Jgbkr.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Alexandra Vinogradova</span>
                  </h6>
                  <div className="unit-body">
                    <span>Samuel Yakovlevich Gloucester, writer</span>
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
                          backgroundImage: 'url("/storage/images/Lng1TLUMQanir76iaN1AQcCU20oFNwzR7i3W.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Alyona Bondartschuk</span>
                  </h6>
                  <div className="unit-body">
                    <span>Edgar Samuelovich Gloucester, his legitimate son, a Jew</span>
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
                          backgroundImage: 'url("/storage/images/XLybVPvzR9PlNRuLTsscyy1AJjsPJvTfutS3.png")',
                        }}
                      ></a>
                    </span>
                  </div>
                  <h6 style={{ color: '#000' }}>
                    <span>Maria Zimina</span>
                  </h6>
                  <div className="unit-body">
                    <span>
                      Edmond Samuilovich Gloucester, his illegitimate son, Russian (on his mother's side)
                    </span>
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
                  href="/storage/images/qN17Fuge6lcG2yKZ8Ff9r9LvMkHMqlw2QP9N.jpeg"
                  style={{ background: 'url("/storage/images/qN17Fuge6lcG2yKZ8Ff9r9LvMkHMqlw2QP9N.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/qN17Fuge6lcG2yKZ8Ff9r9LvMkHMqlw2QP9N.jpeg"
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
                  href="/storage/images/OSWaD6dSIBZzZOUUsNrP1ouODxd95N8Inlaq.jpeg"
                  style={{ background: 'url("/storage/images/OSWaD6dSIBZzZOUUsNrP1ouODxd95N8Inlaq.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/OSWaD6dSIBZzZOUUsNrP1ouODxd95N8Inlaq.jpeg"
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
                  href="/storage/images/s06ntZhQp9KNvgqEGnC52GEABA8AiMqTrQU1.jpeg"
                  style={{ background: 'url("/storage/images/s06ntZhQp9KNvgqEGnC52GEABA8AiMqTrQU1.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/s06ntZhQp9KNvgqEGnC52GEABA8AiMqTrQU1.jpeg"
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
                  href="/storage/images/wF6BHCKPW3h92QsqW4cCIQrKMOMYxSpwMCBv.jpeg"
                  style={{ background: 'url("/storage/images/wF6BHCKPW3h92QsqW4cCIQrKMOMYxSpwMCBv.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/wF6BHCKPW3h92QsqW4cCIQrKMOMYxSpwMCBv.jpeg"
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
                  href="/storage/images/PRO95b21jPGYG4XLfsYmMfDigujAfNsvfKyC.jpeg"
                  style={{ background: 'url("/storage/images/PRO95b21jPGYG4XLfsYmMfDigujAfNsvfKyC.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/PRO95b21jPGYG4XLfsYmMfDigujAfNsvfKyC.jpeg"
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
                  href="/storage/images/53v4PJha0xomhWBpxudCIl6VgEVEo4Ps8bs4.jpeg"
                  style={{ background: 'url("/storage/images/53v4PJha0xomhWBpxudCIl6VgEVEo4Ps8bs4.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/53v4PJha0xomhWBpxudCIl6VgEVEo4Ps8bs4.jpeg"
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
                  href="/storage/images/cxsAUqt4asRO7psNMFALVM1MRNaU9ZPB4nhQ.jpeg"
                  style={{ background: 'url("/storage/images/cxsAUqt4asRO7psNMFALVM1MRNaU9ZPB4nhQ.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/cxsAUqt4asRO7psNMFALVM1MRNaU9ZPB4nhQ.jpeg"
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
                  href="/storage/images/QePVdTOaOTm8lGP5Ns1rngwNWfnIKWLJjEtM.jpeg"
                  style={{ background: 'url("/storage/images/QePVdTOaOTm8lGP5Ns1rngwNWfnIKWLJjEtM.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/QePVdTOaOTm8lGP5Ns1rngwNWfnIKWLJjEtM.jpeg"
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
                  href="/storage/images/uPlpksV4FZ4B3OUGH6MC2wMUH5twtDMmxiqQ.jpeg"
                  style={{ background: 'url("/storage/images/uPlpksV4FZ4B3OUGH6MC2wMUH5twtDMmxiqQ.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/uPlpksV4FZ4B3OUGH6MC2wMUH5twtDMmxiqQ.jpeg"
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
                  href="/storage/images/DCCqO6Oio7bvVFDk4xn05GwPDRg2qtGvqQik.jpeg"
                  style={{ background: 'url("/storage/images/DCCqO6Oio7bvVFDk4xn05GwPDRg2qtGvqQik.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/DCCqO6Oio7bvVFDk4xn05GwPDRg2qtGvqQik.jpeg"
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
                  href="/storage/images/RYDtT6eIoIbGAJ8GBOqICeYVlNXQQGIRSOvL.jpeg"
                  style={{ background: 'url("/storage/images/RYDtT6eIoIbGAJ8GBOqICeYVlNXQQGIRSOvL.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/RYDtT6eIoIbGAJ8GBOqICeYVlNXQQGIRSOvL.jpeg"
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
                  href="/storage/images/VE0ZQd0jXru2wi8t2GAAD4aZuBE2uEqqyMKi.jpeg"
                  style={{ background: 'url("/storage/images/VE0ZQd0jXru2wi8t2GAAD4aZuBE2uEqqyMKi.jpeg")' }}
                >
                  <figure style={{ display: 'none' }}>
                    <img
                      src="/storage/images/VE0ZQd0jXru2wi8t2GAAD4aZuBE2uEqqyMKi.jpeg"
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
