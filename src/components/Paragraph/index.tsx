import React from 'react';
import { FontWeight } from 'types';
import { ParagraphWrapper } from './styles';

type ParagraphProps = {
  children: React.ReactNode;
  fontSize?: number;
  fontWeight?: FontWeight;
  color?: string;
  center?: boolean;
  uppercase?: boolean;
};

const Paragraph = ({ children, ...props }: ParagraphProps) => {
  return <ParagraphWrapper {...props}>{children}</ParagraphWrapper>;
};

export default Paragraph;
