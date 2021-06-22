import ChooseDestionationView from '.';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDispatch } from 'react-redux';
import { locations } from 'mockData/originLocations';
import { render, screen, waitFor, waitForElementToBeRemoved } from 'testUtils/test-utils';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

jest.mock('react-redux', () => ({
  ...(jest.requireActual('react-redux') as {}),
  useDispatch: jest.fn()
}));

describe('<ChooseDestionationView />', () => {
  const useAppDispatch = jest.fn();
  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(useAppDispatch);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<ChooseDestionationView />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    render(<ChooseDestionationView />, {});
    expect(screen).toBeTruthy();
  });

  it('should show dropdown when typing in the from input', async () => {
    render(<ChooseDestionationView />, { initialState: { ...locations } });
    userEvent.type(screen.getByTestId('from-input'), 'aa');
    await waitFor(() => expect(screen.getByRole('list')).toBeInTheDocument());
    expect(screen.getAllByRole('listitem').length).toBe(locations.locations.originLocations.length);
  });

  it('should show locations when typing in the from input', async () => {
    render(<ChooseDestionationView />, { initialState: { ...locations } });
    userEvent.type(screen.getByTestId('from-input'), 'aa');
    await waitFor(() => expect(screen.getByRole('list')).toBeInTheDocument());
    const testLocation1Name = locations.locations.originLocations[0].name;
    const testLocation2Name =
      locations.locations.originLocations[locations.locations.originLocations.length - 1].name;
    expect(screen.getByText(testLocation1Name)).toBeInTheDocument();
    expect(screen.getByText(testLocation2Name)).toBeInTheDocument();
  });

  it('should hide dropdown when only 1 char in input field (from input)', async () => {
    render(<ChooseDestionationView />, { initialState: { ...locations } });
    userEvent.type(screen.getByTestId('from-input'), 'aa');
    await waitFor(() => expect(screen.getByRole('list')).toBeInTheDocument());
    expect(screen.getAllByRole('listitem').length).toBe(locations.locations.originLocations.length);
    userEvent.type(screen.getByTestId('from-input'), '{backspace}');
    await waitForElementToBeRemoved(screen.getByRole('list'));
  });

  it('should not show dropdown when only typed in one char (from input)', async () => {
    render(<ChooseDestionationView />, { initialState: { ...locations } });
    userEvent.type(screen.getByTestId('from-input'), 'a');
    await act(async () => {
      await new Promise((r) => setTimeout(r, 600));
    });

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('should set input to location onClick and call dispatch (from input)', async () => {
    render(<ChooseDestionationView />, { initialState: { ...locations } });
    userEvent.type(screen.getByTestId('from-input'), 'aa');
    await waitFor(() => expect(screen.getByRole('list')).toBeInTheDocument());
    userEvent.click(screen.getAllByRole('listitem')[0]);
    await act(async () => {
      await new Promise((r) => setTimeout(r, 100));
    });
    const locationName = locations.locations.originLocations[0].name;
    expect(screen.getByTestId('from-input')).toHaveValue(locationName);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('should show dropdown when typing in the to input', async () => {
    render(<ChooseDestionationView />, { initialState: { ...locations } });
    userEvent.type(screen.getByTestId('to-input'), 'aa');
    await waitFor(() => expect(screen.getByRole('list')).toBeInTheDocument());
    expect(screen.getAllByRole('listitem').length).toBe(
      locations.locations.destinationLocations.length
    );
  });

  it('should show locations when typing in the to input', async () => {
    render(<ChooseDestionationView />, { initialState: { ...locations } });
    userEvent.type(screen.getByTestId('to-input'), 'aa');
    await waitFor(() => expect(screen.getByRole('list')).toBeInTheDocument());
    const testLocation1Name = locations.locations.destinationLocations[0].name;
    const testLocation2Name =
      locations.locations.destinationLocations[locations.locations.destinationLocations.length - 1]
        .name;
    expect(screen.getByText(testLocation1Name)).toBeInTheDocument();
    expect(screen.getByText(testLocation2Name)).toBeInTheDocument();
  });

  it('should hide dropdown when only 1 char in input field (to input)', async () => {
    render(<ChooseDestionationView />, { initialState: { ...locations } });
    userEvent.type(screen.getByTestId('to-input'), 'aa');
    await waitFor(() => expect(screen.getByRole('list')).toBeInTheDocument());
    expect(screen.getAllByRole('listitem').length).toBe(
      locations.locations.destinationLocations.length
    );
    userEvent.type(screen.getByTestId('to-input'), '{backspace}');
    await waitForElementToBeRemoved(screen.getByRole('list'));
  });

  it('should not show dropdown when only typed in one char (to input)', async () => {
    render(<ChooseDestionationView />, { initialState: { ...locations } });
    userEvent.type(screen.getByTestId('to-input'), 'a');
    await act(async () => {
      await new Promise((r) => setTimeout(r, 600));
    });

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('should set input to location onClick and call dispatch (to input)', async () => {
    render(<ChooseDestionationView />, { initialState: { ...locations } });
    userEvent.type(screen.getByTestId('to-input'), 'aa');
    await waitFor(() => expect(screen.getByRole('list')).toBeInTheDocument());
    userEvent.click(screen.getAllByRole('listitem')[0]);
    await act(async () => {
      await new Promise((r) => setTimeout(r, 100));
    });
    const locationName = locations.locations.destinationLocations[0].name;
    expect(screen.getByTestId('to-input')).toHaveValue(locationName);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
