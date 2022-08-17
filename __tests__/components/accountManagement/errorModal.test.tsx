import { screen, render } from '@testing-library/react';
import ErrorModal from '../../../components/accountManagement/errorModal';
import React from 'react';

describe('<ErrorModal />', () => {
  test('renders correctly and delete account button disabled unless inputs match', () => {
    render(<ErrorModal />);

    const text = screen.getAllByText(/unable to delete account/i);
    const xButton = screen.getByLabelText('Close');
    const closeButton = screen.getByRole('button', {
      name: /return to account page/i,
      hidden: true,
    });

    expect(text).toHaveLength(2);
    expect(xButton).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });
});
