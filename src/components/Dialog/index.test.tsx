import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Dialog from '.';
import userEvent from '@testing-library/user-event';
import { hideDialog } from 'redux/dialogSlice';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useSelector, useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe('<Dialog />', () => {
  const useAppDispatch = jest.fn();
  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue({ dialog: { show: true } });
    (useDispatch as jest.Mock).mockReturnValue(useAppDispatch);
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<Dialog />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    render(<Dialog />);
    expect(screen).toBeTruthy();
  });

  it('should call dispatch with hideDialog onClick', () => {
    render(<Dialog />);
    userEvent.click(screen.getByRole('button'));
    expect(useAppDispatch).toHaveBeenCalledWith(hideDialog());
    expect(useAppDispatch).toHaveBeenCalledTimes(1);
  });

  it('should call dispatch with hideDialog on Escape', () => {
    render(<Dialog />);
    const dialog = screen.getByTestId('dialog-wrapper');
    fireEvent.keyDown(dialog, { key: 'Escape', code: 'Escape' });
    expect(useAppDispatch).toHaveBeenCalledWith(hideDialog());
    expect(useAppDispatch).toHaveBeenCalledTimes(1);
  });
});
