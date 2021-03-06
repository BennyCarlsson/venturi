import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Paragraph, { fontWeight } from '.';

describe('<Paragraph />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Paragraph>test</Paragraph>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders without crashing', () => {
    render(
      <Paragraph fontSize={16} fontWeight={fontWeight.bold} color="green" center>
        test
      </Paragraph>
    );
    expect(screen).toBeTruthy();
  });

  it('should renders text', () => {
    render(<Paragraph>asd 123</Paragraph>);
    expect(screen.queryByText('asd 123')).toBeInTheDocument();
  });
});
