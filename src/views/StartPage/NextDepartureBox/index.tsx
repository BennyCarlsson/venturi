import { Departure } from 'types';
import { Box, Heading, Heading2, Heading3, Heading4 } from './styles';

const NextDepartureBox = (props: Departure) => {
  const { stop, time, rtTime, direction, sname } = props;
  return (
    <Box>
      <Heading>Departs</Heading>
      <Heading2>{stop}</Heading2>
      <Heading3>{time}</Heading3>
      <Heading4>{rtTime}</Heading4>
      <div>{`${sname} ${direction}`}</div>
    </Box>
  );
};

export default NextDepartureBox;
