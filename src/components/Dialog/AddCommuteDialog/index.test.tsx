import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AddCommuteDialog from '.';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useSelector, useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe('<AddCommuteDialog />', () => {
  const useAppDispatch = jest.fn();
  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation((callback) =>
      callback({ dialog: { show: true }, locations: { destinationError: 'error' } })
    );
    (useDispatch as jest.Mock).mockReturnValue(useAppDispatch);
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<AddCommuteDialog />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    render(<AddCommuteDialog />);
    expect(screen).toBeTruthy();
  });
});
