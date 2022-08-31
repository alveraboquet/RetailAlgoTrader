import { screen, render } from '@testing-library/react';
import ProSignupBanner from '../../../components/pricing/proSignupBanner';

describe('<ProSignupBanner />', () => {
  test('renders for non pro user', () => {
    render(<ProSignupBanner isPro={false} />);

    const text = screen.getByText(
      'You currently have a Hobby account. If you would like to upgrade to a Pro membership please click here:'
    );
    const button = screen.getAllByRole('button', { name: /upgrade to pro/i });

    expect(text).toBeInTheDocument();
    expect(button).toHaveLength(2);
  });

  test('does not render for pro user', () => {
    render(<ProSignupBanner isPro={true} />);

    const text = screen.queryByText(
      'You currently have a Hobby account. If you would like to upgrade to a Pro membership please click here:'
    );
    const button = screen.queryByRole('button', { name: /upgrade to pro/i });

    expect(text).not.toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
});
