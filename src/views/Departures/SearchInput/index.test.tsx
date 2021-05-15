import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SearchInput from '.';

describe('<SearchInput />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<SearchInput title="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    render(<SearchInput title="test" />);
    expect(screen).toBeTruthy();
  });
});
