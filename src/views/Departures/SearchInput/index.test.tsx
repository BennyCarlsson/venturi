import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import SearchInput from '.';

describe('<SearchInput />', () => {
  const value = 'texttext';
  const onChange = jest.fn();
  const setShowDropDown = jest.fn();

  beforeEach(() => {
    render(<SearchInput value={value} onChange={onChange} setShowDropDown={setShowDropDown} />);
  });

  it('should match snapshot', () => {
    const tree = renderer.create(
      <SearchInput value="123" onChange={jest.fn()} setShowDropDown={jest.fn()} />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    expect(screen).toBeTruthy();
  });

  it('should have value as input value', () => {
    expect(screen.getByRole('textbox')).toHaveValue(value);
  });

  it('should call onChange onChange', () => {
    userEvent.type(screen.getByRole('textbox'), 'Hello');
    expect(onChange).toHaveBeenCalledTimes(5);
  });

  it('should call setShowDropDown onFocus', () => {
    screen.getByRole('textbox').focus();
    expect(setShowDropDown).toHaveBeenCalledTimes(1);
    expect(setShowDropDown).toHaveBeenCalledWith(true);
  });

  it('should not call setShowDropDown onFocus when value is none', () => {
    cleanup();
    render(<SearchInput value={''} onChange={onChange} setShowDropDown={setShowDropDown} />);
    screen.getByRole('textbox').focus();
    expect(setShowDropDown).not.toHaveBeenCalled();
  });

  it('should not call setShowDropDown onFocus with value.length is 1', () => {
    cleanup();
    render(<SearchInput value={'a'} onChange={onChange} setShowDropDown={setShowDropDown} />);
    screen.getByRole('textbox').focus();
    expect(setShowDropDown).not.toHaveBeenCalled();
  });

  it('should call setShowDropDown onBlur', async () => {
    screen.getByRole('textbox').focus();
    screen.getByRole('textbox').blur();

    expect(setShowDropDown).toHaveBeenCalledTimes(1); // from onFocus

    await waitFor(() => expect(setShowDropDown).toHaveBeenCalledTimes(2)); // from onBlur
    await waitFor(() => expect(setShowDropDown).toHaveBeenNthCalledWith(2, false));
  });
});
