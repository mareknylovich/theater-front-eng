import App from 'next/app';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'next/router';
import withRedux from 'next-redux-wrapper';

import '../utils/i18n';

// import '../assets/css/main.css';

import initStore from '../utils/redux';
import { routing } from '../routes';
import { RouteHandler, Header, Footer, Onload, PaymentPopup } from '../containers';
import { getQuery } from '../utils/navigation';

class MyApp extends App {
  // Fetching serialized(JSON) store state
  static async getInitialProps({ Component, ctx }) {
    await routing({ ...ctx });
    const pageProps = Component.getInitialProps ? await Component.getInitialProps({ ...ctx }) : {};

    return { pageProps };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);

    if (typeof window !== 'undefined') {
      const ref = getQuery('ref');

      if (ref) {
        localStorage.setItem('ref', ref);
      }
    }
  }

  render() {
    const { Component, pageProps, store, router } = this.props;

    return (
      <ReduxProvider store={store}>
        <RouteHandler />
        <Onload />
        <CssBaseline />
        {router.pathname.includes('/payment') ? (
          <Component {...pageProps} />
        ) : (
          <div className="page">
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        )}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
var onWebChat={ar:[], set: function(a,b){if (typeof onWebChat_==='undefined'){this.ar.
push([a,b]);}else{onWebChat_.set(a,b);}},get:function(a){return(onWebChat_.get(a));},
w:(function(){ var ga=document.createElement('script'); ga.type = 'text/javascript';
ga.async=1;ga.src=('https:'==document.location.protocol?'https:':'http:') + 
'//www.onwebchat.com/clientchat/71a4f9f04d8a29c4c9c375a77ceae19f';var s=
document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})()}
          `,
          }}
        />
        <script src="/js/jquery.min.js" />
        <script src="/js/fp.js" />
        <script src="/js/imask.js" />
        <script src="/js/noty.min.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `var services = {"VIP":90,"1":60,"2":55,"4":50,"6":45,"7":40,"9":40}`,
          }}
        />
        {!router.pathname.includes('/payment') && <script src="/js/app.js" />}
        <script src="/js/redirect.js" />
        <script src="/js/common.js?v=1.0" />
        <script
          dangerouslySetInnerHTML={{
            __html: ` Noty.overrideDefaults({
             progressBar: false,
             timeout: 3500,
             theme: 'bootstrap-v4',
         });`,
          }}
        />
        {router.pathname.includes('/buytickets/') && <PaymentPopup />}
      </ReduxProvider>
    );
  }
}

export default withRouter(withRedux(initStore, { debug: false })(MyApp));
