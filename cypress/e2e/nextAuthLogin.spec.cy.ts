import { Cookie } from 'next-auth/core/lib/cookie';

describe('Login to dashboard', () => {
  before(() => {
    cy.log('Visiting http://localhost:3000');
    cy.visit('/auth/signin');
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
      loginSelector: '[data-testid=Google]',
      postLoginSelector: '[data-testid=dashboard]',
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
        }
      });
  });

  after(() => {
    cy.visit('/api/auth/signout');
    cy.get('form').submit();
  });

  it('dashboard', () => {
    cy.visit('/app/dashboard'); // login-protected page that will redirect to homepage if no session cookie
    cy.get('h1').should('contain', 'Course Catalog'); // check to ensure we could actually navigate to the dashboard page
  });
});
