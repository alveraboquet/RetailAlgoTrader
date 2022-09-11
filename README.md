# RetailAlgoTrader Web Application

Next.js web application hosted on Vercel. RetailAlgoTrader offers educational resources and tools for algorithmic trading. Data and user sessions are stored in a PostgreSQL database hosted on DigitalOcean.

A live demo of the application can be seen [here](https://www.retailalgotrader.com/).

![RetailAlgoTrader Homepage!](/images/website/ratDashboard.webp)

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Features](#features)
- [Running the app](#running-the-app)
- [Project status](#project-status)
- [Next steps](#next-steps)
- [Resources / Acknowledgements](#resources--acknowledgements)
- [License](#license)

## Introduction

Over the past year, I have been developing my full-stack development skills. RetailAlgoTrader was created as a production-ready web application to improve my skillset while demonstrating my capabilities with web development.

RetailAlgoTrader is a subscription-based web application that offers courses focused on algorithmic trading. Authentication is handled through NextAuth.js, while payments are handled through Stripe.js. A PostgreSQL database hosted on DigitalOcean is used to store data and securely handle sessions.

Completion progress for each course is tracked and is constantly updated as the user completes lessons. Testing of the site is conducted with Jest, React Testing Library, and Cypress.

Currently my primary goal is to further develop my full-stack web application skills. I already had experience with React and Node, so I decided to add Next.js to my skill-set. This allowed me to implement the benefits inherit in statically-generated and server-rendered pages as opposed to a pure SPA. In addition, I was able to learn how to set up serverless functions as well as deploy them.

## Technologies

- next 12.2.2
- react 18.2.0
- next-auth 4.10.3
- typescript 4.7.4
- pg 8.7.3
- @next/mdx 12.2.3
- bootstrap 5.1.3
- @prisma/client 4.2.1
- prisma 4.2.1
- stripe 10.0.0
- cypress 10.2.0
- jest 27.5.1

Note that these are only the major packages and programs used. For a full list of packages and versions check the package.json file.

## Features

- Login-protected dashboard and courses
- User registration and login through NextAuth.js
- Monthly or yearly subscription through Stripe.js
- Pro courses only accessible to paying users
- Blog with custom articles and guides
- Ability for user to change description or delete account and data
- Course completion tracking
- SEO component to maximize SEO results
- Hosted on Vercel
- Styling done with Bootstrap
- PostgreSQL database on DigitalOcean

## Running the app

To run locally, `npm install`, then `npm run dev`.

This project requires a local PostgreSQL database running. The PGHOST, PGUSER, PGDATABASE, PGPASSWORD, and PGPORT environment variables will need to be updated with your specific credentials.

In addition, a Stripe account with unique credentials will be required. A Stripe webhook is necessary for proper integration with the PostgreSQL database and NextAuth.js. More information can be found [here](https://www.mattlaux.com/posts/settingUpStripe#set-up-stripe).

Once the app is running locally, you can access the Next.js application at `http://localhost:<your-port>`.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Project Status

At this point in time, work on the actual web application has been paused. The three goals of this project are as follows:

1. Explore how the Next.js framework compares to React with an Express API
2. Integrate a web application with authentication through NextAuth.js and payments through Stripe
3. Learn how to properly test a web application through Jest, React Testing Library, and Cypress

All three of these goals have been met. My focus has turned towards developing the CI/CD work flow for my application. The current CI/CD work flow is described below:

1. Open new branch for specific issue
2. Merge branch to staging branch
3. Vercel deploys previews to staging domain which has access to a database and Stripe account
4. GitHub actions automatically runs tests (Work in progress)
5. Merge staging branch into main branch if all tests pass

## Next Steps:

- Add additional OAuth providers
- Populate courses with additional lessons
- Integrate with existing brokers to allow users to place trades through platform
- Integrate with brokerage to provide price and news alerts

## Resources / Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js deployment documentation](https://nextjs.org/docs/deployment)
- [Next.js custom signin page](https://next-auth.js.org/configuration/pages#sign-in-page)
- [How to handle SEO metadata in Next.js](https://cheatcode.co/tutorials/how-to-handle-seo-metadata-in-next-js)
- [Bootstrap form validation](https://getbootstrap.com/docs/5.0/forms/validation/)
- [Prisma with Next.js](https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices)
- [How to add user accounts and paid subscriptions to your Next.js website](https://dev.to/ajones_codes/how-to-add-user-accounts-and-paid-subscriptions-to-your-nextjs-website-585e)

## License

No license is offered for this software. This software is under exlusive copyright and is not available for copy, distribution, or modifying.
