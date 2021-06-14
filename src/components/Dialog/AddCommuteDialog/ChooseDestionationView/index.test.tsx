import ChooseDestionationView from '.';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDispatch } from 'react-redux';
import { render, screen } from 'testUtils/test-utils';

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
});
