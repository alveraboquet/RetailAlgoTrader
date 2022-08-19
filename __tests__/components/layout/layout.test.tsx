import { screen, render } from '@testing-library/react';
import Layout from '../../../components/layout/layout';

describe('<Layout />', () => {
  test('renders correctly', () => {
    render(
      <Layout>
        <p>Billy bob joe</p>
      </Layout>
    );

    const homeLink = screen.getByRole('link', { name: /login/i });
    const children = screen.getByText(/billy bob joe/i);
    const footer = screen.getByText(
      /get started with algorithmic trading today with our free courses!/i
    );

    expect(homeLink).toBeInTheDocument();
    expect(children).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
