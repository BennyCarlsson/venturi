import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Menu from '.';

describe('<Menu />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Menu title="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    render(<Menu title="test" />);
    expect(screen).toBeTruthy();
  });
});
