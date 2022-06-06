import { screen, render } from '@testing-library/react';
import SignUpButton from '../../../components/pricing/signUpButton';

describe('<SignUpButton />', () => {
  test('renders correctly', () => {
    render(<SignUpButton />);

    const button = screen.getByRole('button', { name: /sign up/i });

    expect(button).toBeInTheDocument();
  });
});
