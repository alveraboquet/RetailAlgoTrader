import { Cookie } from 'next-auth/core/lib/cookie';

describe('Login page', () => {
  before(() => {
    cy.log('Visiting https://company.tld');
    cy.visit('/auth/signin');
  });
  it('Login with Google', () => {
    const username = Cypress.env('GOOGLE_USER');
    const password = Cypress.env('GOOGLE_PW');
    const loginUrl = `${Cypress.env('SITE_NAME')}/auth/signin`;
    const cookieName = Cypress.env('COOKIE_NAME');
    const socialLoginOptions = {
      username,
      password,
      loginUrl,
      headless: true,
      logs: false,
      isPopup: true,
      loginSelector: '.col-8 > :nth-child(2) > :nth-child(1) > #Google',
      postLoginSelector: ':nth-child(4) > :nth-child(2) > .card > .bg-warning',
    };

    return cy
      .task<{
        cookies: any;
        lsd: any;
        ssd: any;
      }>('GoogleSocialLogin', socialLoginOptions)
      .then(({ cookies }) => {
        cy.clearCookies();

        const cookie = cookies
          .filter((cookie: Cookie) => cookie.name === cookieName)
          .pop();
        if (cookie) {
          cy.setCookie(cookie.name, cookie.value, {
            domain: cookie.domain,
            expiry: cookie.expires,
            httpOnly: cookie.httpOnly,
            path: cookie.path,
            secure: cookie.secure,
          });

          Cypress.Cookies.defaults({
            preserve: cookieName,
          });

          // remove the two lines below if you need to stay logged in
          // for your remaining tests
          cy.visit('/api/auth/signout');
          cy.get('form').submit();
        }
      });
  });
});
