import React from 'react';
import { FontWeight } from 'types';
import { StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledH6 } from './styles';

export enum HeadingType {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

type HeadingProps = {
  children: React.ReactNode;
  fontSize?: number;
  fontWeight?: FontWeight;
  color?: string;
  center?: boolean;
  uppercase?: boolean;
  headingType: HeadingType;
};

const Heading = ({ headingType, children, ...props }: HeadingProps) => {
  switch (headingType) {
    case HeadingType.H1:
      return <StyledH1 {...props}>{children}</StyledH1>;
    case HeadingType.H2:
      return <StyledH2 {...props}>{children}</StyledH2>;
    case HeadingType.H3:
      return <StyledH3 {...props}> {children}</StyledH3>;
    case HeadingType.H4:
      return <StyledH4 {...props}>{children}</StyledH4>;
    case HeadingType.H5:
      return <StyledH5 {...props}>{children}</StyledH5>;
    case HeadingType.H6:
      return <StyledH6 {...props}>{children}</StyledH6>;
    default:
      return <StyledH1 {...props}>{children}</StyledH1>;
  }
};

export default Heading;
