import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import CloseIconButton from '.';

describe('<CloseIconButton />', () => {
  const onClick = jest.fn();
  it('should match snapshot', () => {
    const tree = renderer.create(<CloseIconButton onClick={onClick} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    render(<CloseIconButton onClick={onClick} />);
    expect(screen).toBeTruthy();
  });

  it('should call onClick', () => {
    render(<CloseIconButton onClick={onClick} />);
    expect(onClick).not.toHaveBeenCalled();
    userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
