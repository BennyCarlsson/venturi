import Heading from 'components/Heading';
import React from 'react';
import colors from 'tokens/colors';
import { FontWeight } from 'types';
import { TimeBoxWrapper } from './styles';

type TimeBoxProps = {
  title: string;
};

const TimeBox = ({ title, ...props }: TimeBoxProps) => {
  return (
    <TimeBoxWrapper {...props}>
      {
        <Heading
          headingType={'h1'}
          fontWeight={FontWeight.medium}
          fontSize={18}
          color={colors.white}
        >
          Title
        </Heading>
      }
    </TimeBoxWrapper>
  );
};

export default TimeBox;
