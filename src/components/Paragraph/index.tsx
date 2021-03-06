import React from 'react';
import { ParagraphWrapper } from './styles';

export enum fontWeight {
  normal = 400,
  medium = 500,
  bold = 700
}

type ParagraphProps = {
  children: React.ReactNode;
  fontSize?: number;
  fontWeight?: fontWeight;
  color?: string;
  center?: boolean;
};

const Paragraph = ({ children, ...props }: ParagraphProps) => {
  return <ParagraphWrapper {...props}>{children}</ParagraphWrapper>;
};

export default Paragraph;
