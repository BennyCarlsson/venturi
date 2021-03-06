import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Paragraph from '.';

describe('<Paragraph />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Paragraph title="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders without crashing', () => {
    render(<Paragraph title="test" />);
    expect(screen).toBeTruthy();
  });
});
