import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import Colors from 'tokens/colors';
import { FontWeight } from 'types';
import TimeUntilDeparture from '../TimeUntilDeparture';
import { useDispatch, useSelector } from 'react-redux';
import {
  TimeBoxWrapper,
  TimeWrapper,
  LocationWrapper,
  NumberBox,
  TimeLocationWrapper,
  NumberAndNameWrapper,
  StyledMapPinLogo,
  StyledRtTimeHeading
} from './styles';
import { increment } from 'redux/testSlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux';

type TimeBoxProps = {
  date?: string;
  time?: string;
  rtTime?: string;
  location?: string;
  number?: string;
  direction?: string;
};

const TimeBox = ({ date, time, rtTime, location, number, direction, ...props }: TimeBoxProps) => {
  const isOnTime = () => {
    if (!rtTime) return true;
    if (time !== rtTime) return false;
    return true;
  };

  const getTimeColor = () => {
    if (isOnTime()) return Colors.vBlue;
    return Colors.vRed;
  };

  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => {
    console.log(state);

    return state.test.value;
  });

  return (
    <TimeBoxWrapper {...props} onClick={() => dispatch(increment())}>
      <h1>{count}</h1>
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
            color={getTimeColor()}
          >
            {rtTime ? rtTime : time}
          </Heading>
          {!isOnTime() && (
            <StyledRtTimeHeading headingType={'h3'} fontWeight={FontWeight.bold} fontSize={18}>
              {time}
            </StyledRtTimeHeading>
          )}
        </TimeWrapper>
        <TimeUntilDeparture date={date} time={rtTime ? rtTime : time} />
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
