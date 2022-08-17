import { screen, render } from '@testing-library/react';
import Footer from '../../../components/footer/footer';
import React from 'react';

describe('<Footer />', () => {
  test('renders correctly', () => {
    render(<Footer />);

    const slogan = screen.getByText(
      /retailalgotrader - become a profitable retail trader/i
    );
    const desktopCTA = screen.getByRole('button', { name: /click here/i });
    const phoneCTA = screen.getByRole('button', {
      name: /get started for free/i,
    });
    const aboutUs = screen.getByText(/about us/i);
    const aboutUsText = screen.getByText(
      /retailalgotrading is a resource and community dedicated to retail/i
    );
    const contactUs = screen.getAllByText(/contact us/i);
    const emailIcon = screen.getByRole('img', { name: /email icon/i });
    const emailLink = screen.getAllByText('contact@retailalgotrader.com');
    const homeIcon = screen.getByRole('img', { name: /home icon/i });
    const homeIconLink = screen.getByRole('link', {
      name: 'https://retailalgotrader.com',
    });
    const facebookLink = screen.getByRole('img', { name: /facebook logo/i });
    const twitterLink = screen.getByRole('img', { name: /twitter logo/i });
    const instagramLink = screen.getByRole('img', { name: /instagram logo/i });
    const quoraLink = screen.getByRole('img', { name: /quora logo/i });
    const postsHeader = screen.getByRole('heading', {
      name: /top blog posts/i,
    });
    const article1 = screen.getByText(
      'What are market makers and how do they work?'
    );
    const articleButtons = screen.getAllByRole('button', {
      name: /read more/i,
    });
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const blogLink = screen.getByRole('link', { name: /blog/i });
    const loginLink = screen.getByRole('link', { name: /login/i });

    expect(slogan).toBeInTheDocument();
    expect(desktopCTA).toBeInTheDocument();
    expect(phoneCTA).toBeInTheDocument();
    expect(aboutUs).toBeInTheDocument();
    expect(aboutUsText).toBeInTheDocument();
    expect(contactUs).toHaveLength(2);
    expect(emailIcon).toBeInTheDocument();
    expect(emailLink).toHaveLength(2);
    expect(homeIcon).toBeInTheDocument();
    expect(homeIconLink).toBeInTheDocument();
    expect(facebookLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(quoraLink).toBeInTheDocument();
    expect(postsHeader).toBeInTheDocument();
    expect(article1).toBeInTheDocument();
    expect(articleButtons).toHaveLength(3);
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });
});
