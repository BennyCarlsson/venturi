import React from 'react';
import { TimeBoxWrapper } from './styles';

type TimeBoxProps = {
  title: string;
};

const TimeBox = ({ title, ...props }: TimeBoxProps) => {
  return <TimeBoxWrapper {...props}>{title}</TimeBoxWrapper>;
};

export default TimeBox;
