import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DropDown from '.';

describe('<DropDown />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<DropDown title="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    render(<DropDown title="test" />);
    expect(screen).toBeTruthy();
  });
});
