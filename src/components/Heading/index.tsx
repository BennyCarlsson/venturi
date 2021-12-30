import React from "react";
import { FontWeight } from "types";
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
} from "./styles";

export type HeadingProps = {
  children?: React.ReactNode;
  fontSize?: number;
  fontWeight?: FontWeight;
  color?: string;
  center?: boolean;
  uppercase?: boolean;
  headingType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading = ({ headingType, children, ...props }: HeadingProps) => {
  switch (headingType) {
    case "h1":
      return <StyledH1 {...props}>{children}</StyledH1>;
    case "h2":
      return <StyledH2 {...props}>{children}</StyledH2>;
    case "h3":
      return <StyledH3 {...props}> {children}</StyledH3>;
    case "h4":
      return <StyledH4 {...props}>{children}</StyledH4>;
    case "h5":
      return <StyledH5 {...props}>{children}</StyledH5>;
    case "h6":
      return <StyledH6 {...props}>{children}</StyledH6>;
    default:
      return <StyledH1 {...props}>{children}</StyledH1>;
  }
};

export default Heading;
