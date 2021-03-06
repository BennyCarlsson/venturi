import React from 'react';
import { ParagraphWrapper } from './styles';

type ParagraphProps = {
  title: string;
};

const Paragraph = ({ title, ...props }: ParagraphProps) => {
  return <ParagraphWrapper {...props}>{title}</ParagraphWrapper>;
};

export default Paragraph;
