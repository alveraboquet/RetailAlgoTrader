/**
 * Establishes default settings for the seo component
 *
 * graphql and routes objects are commented out as these are
 * currently not in use. May be implemented later on as
 * the SEO strategy develops
 *
 * TODOS:
 *  1. Update social twitter to proper values
 */
const settings = {
  /*
  graphql: {
    uri: 'http://localhost:5001/api/graphql',
  },
  */
  meta: {
    rootUrl: 'https://retailalgotrader',
    title: 'RetailAlgoTrader',
    description:
      'Discover how to intelligently and profitably trade as a retail algorithmic trader',
    social: {
      graphic: 'https://ezmto.com/images/bullTraderSocial.webp',
      twitter: 'RetailAlgoTrade',
    },
  },
  /*
  routes: {
    authenticated: {
      pathAfterFailure: '/login',
    },
    public: {
      pathAfterFailure: '/',
    },
  },
  */
};

export default settings;
