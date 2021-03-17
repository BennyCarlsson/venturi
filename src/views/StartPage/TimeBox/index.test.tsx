import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TimeBox from '.';

describe('<TimeBox />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<TimeBox title="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders without crashing', () => {
    render(<TimeBox title="test" />);
    expect(screen).toBeTruthy();
  });
});
