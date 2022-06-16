import { screen, render, within, waitFor } from '@testing-library/react';
import EaTemplateTool from '../../../components/eaGenerator/eaTemplateTool';
import { SessionProvider } from 'next-auth/react';
import userEvent from '@testing-library/user-event';
import 'bootstrap/dist/css/bootstrap.css';

describe('<EaTemplateTool />', () => {
  test('renders correctly and delete account button disabled unless inputs match', () => {
    render(
      <SessionProvider
        session={{
          expires: '1',
          user: {
            id: 'testId',
            email: 'testEmail@email.com',
            name: 'testUser',
            stripeCustomerId: 'testStripeid',
            isPro: false,
          },
        }}
      >
        <EaTemplateTool />
      </SessionProvider>
    );

    const header = screen.getByRole('heading', { name: /ea generator/i });
    expect(header).toBeInTheDocument();

    // Check platform options
    const platformInput = screen.getByLabelText('platformSelect');
    const platformInputOptions = within(platformInput).getAllByRole('option');
    expect(platformInput).toBeInTheDocument();
    expect(platformInputOptions).toHaveLength(4);

    // Check risk management options
    const riskManagementInput = screen.getByLabelText('riskManagementSelect');
    const riskManagementInputOptions =
      within(platformInput).getAllByRole('option');
    expect(riskManagementInput).toBeInTheDocument();
    expect(riskManagementInputOptions).toHaveLength(4);

    // Check entry rules options
    const entryRulesInput = screen.getByLabelText('entryRulesSelect');
    const entryRulesInputOptions = within(platformInput).getAllByRole('option');
    expect(entryRulesInput).toBeInTheDocument();
    expect(entryRulesInputOptions).toHaveLength(4);

    // Check exit rules options
    const exitRulesInput = screen.getByLabelText('exitRulesSelect');
    const exitRulesInputOptions = within(platformInput).getAllByRole('option');
    expect(exitRulesInput).toBeInTheDocument();
    expect(exitRulesInputOptions).toHaveLength(4);

    // no download button renders because session is valid
    const signedInText = screen.getByText(/signed in/i);
    const downloadButton = screen.queryByRole('button', {
      name: /click here to download your template/i,
    });
    expect(signedInText).toBeInTheDocument();
    expect(downloadButton).not.toBeInTheDocument();
  });

  test('renders download button for non signed in user', () => {
    render(
      <SessionProvider session={null}>
        <EaTemplateTool />
      </SessionProvider>
    );

    // Download button renders because no session
    const signedInText = screen.queryByText(/signed in/i);
    const downloadButton = screen.getByRole('button', {
      name: /click here to download your template/i,
    });
    expect(signedInText).not.toBeInTheDocument();
    expect(downloadButton).toBeInTheDocument();
  });

  test('accordian buttons work', async () => {
    const user = userEvent.setup();
    require('bootstrap/dist/js/bootstrap');
    render(
      <SessionProvider
        session={{
          expires: '1',
          user: {
            id: 'testId',
            email: 'testEmail@email.com',
            name: 'testUser',
            stripeCustomerId: 'testStripeid',
            isPro: false,
          },
        }}
      >
        <EaTemplateTool />
      </SessionProvider>
    );

    const accordionButtons = screen.getAllByRole('button');
    expect(accordionButtons).toHaveLength(13);

    const maxDrawdownButton = screen.getByRole('button', {
      name: /max drawdown/i,
    });
    let maxDrawdownText = screen.getByTestId('accordionText');

    expect(maxDrawdownButton).toHaveClass('accordion-button collapsed');
    expect(maxDrawdownText).toHaveClass('accordion-collapse collapse');

    await user.click(maxDrawdownButton);

    await waitFor(() =>
      expect(maxDrawdownText).toHaveClass('accordion-collapse collapse show')
    );

    expect(maxDrawdownButton).toHaveAttribute('aria-expanded', 'true');
    maxDrawdownText = await screen.findByTestId('accordionText');
    expect(maxDrawdownText).toHaveClass('accordion-collapse collapse show');
  });

  test('select options return the correct number', async () => {
    const user = userEvent.setup();
    render(
      <SessionProvider
        session={{
          expires: '1',
          user: {
            id: 'testId',
            email: 'testEmail@email.com',
            name: 'testUser',
            stripeCustomerId: 'testStripeid',
            isPro: false,
          },
        }}
      >
        <EaTemplateTool />
      </SessionProvider>
    );

    // Select MT4 platform
    const platformInput = screen.getByLabelText('platformSelect');
    const mt4Option = screen.getByRole('option', { name: /mt4/i });
    await user.selectOptions(platformInput, mt4Option);

    // Select risk percentage risk management rule
    const riskManagementInput = screen.getByLabelText('riskManagementSelect');
    const riskManagementOption = screen.getByRole('option', {
      name: /risk percentage/i,
    });
    await user.selectOptions(riskManagementInput, riskManagementOption);

    // Select cointegration entry rule
    const entryRulesInput = screen.getByLabelText('entryRulesSelect');
    const entryRulesOption = screen.getByRole('option', {
      name: /cointegration/i,
    });
    await user.selectOptions(entryRulesInput, entryRulesOption);

    // Select turtle trader indicator exit rule
    const exitRulesInput = screen.getByLabelText('exitRulesSelect');
    const exitRulesOption = screen.getByRole('option', {
      name: /turtle trader indicator exit/i,
    });
    await user.selectOptions(exitRulesInput, exitRulesOption);

    // Confirm correct number is displayed
    const number = screen.getByText('2132');
    expect(number).toBeInTheDocument();
  });
});
