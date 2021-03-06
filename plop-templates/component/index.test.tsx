import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MyComponent from '.';

describe('<MyComponent />', () => {
  xit('should match snapshot', () => {
    const tree = renderer.create(<MyComponent title="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders without crashing', () => {
    render(<MyComponent title="test" />);
    expect(screen).toBeTruthy();
  });
});
