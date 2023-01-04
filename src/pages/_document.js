/* eslint-disable react/no-danger */
import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import MaterialUiServerStyleSheets from '@material-ui/styles/ServerStyleSheets';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    const host = ctx.req.rawHeaders[ctx.req.rawHeaders.indexOf('Host') + 1];
    const blockRobots = host.includes('heroku');

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentSheet.collectStyles(materialUiSheets.collect(<App {...props} />)),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        blockRobots,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      styledComponentSheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>"Drama Theater der Flüchtlinge aus der Ukraine" - Offizielle Website</title>
          <meta
            content="Ein einzigartiges Theater, in dem jede Aufführung ein neues, einzigartiges Team schafft."
            name="description"
          />
          <meta
            content="theaterstücke, Komödie, Drama, Tragikomödie, Theaterstück, Regisseur, wohin man geht, wo man sich unterhalten kann, Mantis, Daria moroz, dmitry Lysenkov, pavel cinarev, didenko, yuri smekalov, Ballettaufführung,"
            name="keywords"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <meta charSet="utf-8" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900"
          />
          {/* NotyJS */}
          <link href="/style/noty.min.css" rel="stylesheet" />
          <link href="/style/bootstrap-v4.css" rel="stylesheet" />
          {/* Custom */}
          <link rel="stylesheet" href="/style/custom.css" />
        </Head>
        <body className="home page-template-default page page-id-6  color-custom style-default button-default layout-full-width no-content-padding header-split header-semi header-fw minimalist-header-no sticky-header sticky-tb-color ab-hide subheader-both-center menu-link-color boxed2fw mobile-tb-center mobile-side-slide mobile-menu mobile-mini-ml-lc tablet-sticky mobile-sticky mobile-tr-header tr-header be-reg-2073">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
