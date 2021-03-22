import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import Colors from 'tokens/colors';
import { FontWeight } from 'types';
import {
  TimeBoxWrapper,
  TimeWrapper,
  LocationWrapper,
  NumberBox,
  TimeLocationWrapper,
  NumberAndNameWrapper
} from './styles';

type TimeBoxProps = {
  date?: string;
  time?: string;
  location?: string;
  number?: string;
  direction?: string;
};

//Todo försening!
const TimeBox = ({ date, time, location, number, direction, ...props }: TimeBoxProps) => {
  const getTimeUntilDeparture = () => {
    if (!date || !time) return;
    const today = new Date();
    const departure = new Date(`${date} ${time}`);
    const diffMs = departure.valueOf() - today.valueOf();
    const diffDays = Math.floor(diffMs / 86400000); // days
    const diffDaysString = `${diffDays > 0 ? `${diffDays} days ` : ''}`;
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    const diffHrsString = `${diffHrs > 0 ? `${diffHrs} hour(s) ` : ''}`;
    const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    const diffMinsString = `${diffMins > 0 ? `${diffMins} minutes ` : ''}`;
    if (diffDays < 0 && diffHrs < 0 && diffMins === 0) return 'now';
    return `${diffDaysString}${diffHrsString}${diffMinsString}`;
  };

  return (
    <TimeBoxWrapper {...props}>
      <TimeLocationWrapper>
        <TimeWrapper>
          <Heading
            headingType={'h2'}
            fontWeight={FontWeight.bold}
            fontSize={48}
            color={Colors.vBlue}
          >
            {time}
          </Heading>
          <Paragraph fontWeight={FontWeight.bold} fontSize={14} color={Colors.vBlue}>
            {getTimeUntilDeparture()}
          </Paragraph>
        </TimeWrapper>
        <LocationWrapper>
          <Paragraph fontSize={14} fontWeight={FontWeight.bold} color={Colors.vBlue}>
            {location}
          </Paragraph>
        </LocationWrapper>
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
