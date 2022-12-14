describe('The Login Page', () => {
  /*
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec('npm run db:reset && npm run db:seed');

    // seed a user in the DB that we can control from our tests
    // assuming it generates a random password for us
    cy.request('POST', '/test/seed/user', { username: 'jane.lane' })
      .its('body')
      .as('currentUser');
  });
  */

  it('sets auth cookie when logging in via form submission', function () {
    // destructuring assignment of the this.currentUser object
    //const { username, password } = this.currentUser;

    cy.visit('/auth/signin');

    cy.contains('Sign in with Google').click();

    cy.get('input[name=username]').type('bob');

    // {enter} causes the form to submit
    cy.get('input[name=password]').type(`${'testpassword'}{enter}`);

    // we should be redirected to /dashboard
    cy.url().should('include', '/dashboard');

    // our auth cookie should be present
    cy.getCookie('your-session-cookie').should('exist');

    // UI should reflect this user being logged in
    cy.get('h1').should('contain', 'jane.lane');
  });

  it('invalid username / password', function () {});

  it('username taken', function () {});

  it('password complexity requirements', function () {});

  it('edge cases like locked / deleted accounts', function () {});
});
