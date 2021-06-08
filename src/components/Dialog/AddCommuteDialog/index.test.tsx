import AddCommuteDialog from '.';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDispatch } from 'react-redux';
import { cleanup, render, screen } from 'testUtils/test-utils';

jest.mock('react-redux', () => ({
  ...(jest.requireActual('react-redux') as {}),
  useDispatch: jest.fn()
}));

describe('<AddCommuteDialog />', () => {
  const useAppDispatch = jest.fn();
  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(useAppDispatch);
  });

  it('should match snapshot', () => {
    cleanup();
    const { asFragment } = render(<AddCommuteDialog />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    render(<AddCommuteDialog />, {
      initialState: {
        dialog: { show: true },
        locations: {
          destinationError: 'error',
          loadingDestination: false,
          loadingOrigin: false
        }
      }
    });
    expect(screen).toBeTruthy();
  });
});
