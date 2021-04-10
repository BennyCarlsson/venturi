import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import Colors from 'tokens/colors';
import { FontWeight } from 'types';
import TimeUntilDeparture from '../TimeUntilDeparture';
import {
  TimeBoxWrapper,
  TimeWrapper,
  LocationWrapper,
  NumberBox,
  TimeLocationWrapper,
  NumberAndNameWrapper,
  StyledMapPinLogo
} from './styles';

type TimeBoxProps = {
  date?: string;
  time?: string;
  rtTime?: string;
  location?: string;
  number?: string;
  direction?: string;
};

//Todo: show rtTime and map-pin.svg
const TimeBox = ({ date, time, rtTime, location, number, direction, ...props }: TimeBoxProps) => {
  return (
    <TimeBoxWrapper {...props}>
      <TimeLocationWrapper>
        <LocationWrapper>
          <StyledMapPinLogo />
          <Paragraph fontSize={14} fontWeight={FontWeight.bold} color={Colors.vBlue}>
            {location}
          </Paragraph>
        </LocationWrapper>
        <TimeWrapper>
          <Heading
            headingType={'h2'}
            fontWeight={FontWeight.bold}
            fontSize={48}
            color={Colors.vBlue}
          >
            {time}
          </Heading>
          <TimeUntilDeparture date={date} time={rtTime ? rtTime : time} />
        </TimeWrapper>
      </TimeLocationWrapper>
      <NumberAndNameWrapper>
        <NumberBox>
          <Paragraph fontWeight={FontWeight.normal} fontSize={14} color={Colors.white}>
            {number}
          </Paragraph>
        </NumberBox>
        <Paragraph fontWeight={FontWeight.medium} fontSize={14}>
          {direction}
        </Paragraph>
      </NumberAndNameWrapper>
    </TimeBoxWrapper>
  );
};

export default TimeBox;
