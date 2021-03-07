import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Heading, { HeadingType } from '.';
import { FontWeight } from 'types';

describe('<Heading />', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <Heading
          headingType={HeadingType.H1}
          fontSize={16}
          fontWeight={FontWeight.bold}
          color="green"
          center
        >
          test
        </Heading>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders without crashing', () => {
    render(
      <Heading
        headingType={HeadingType.H1}
        fontSize={16}
        fontWeight={FontWeight.bold}
        color="green"
        center
      >
        testy test
      </Heading>
    );
    expect(screen).toBeTruthy();
    expect(screen.queryByText('testy test')).toBeInTheDocument();
  });

  const headingTypes = Object.values(HeadingType);
  headingTypes.forEach((headingType) => {
    it(`${headingType} should render passed child element`, () => {
      const text = 'Testy test';
      render(<Heading headingType={headingType}>{text}</Heading>);
      expect(screen.getByText(text, { selector: headingType })).toBeInTheDocument();
    });
  });
});
