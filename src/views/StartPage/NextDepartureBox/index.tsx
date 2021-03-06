import Paragraph, { fontWeight } from 'components/Paragraph';
import colors from 'tokens/colors';
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
      <Paragraph
        color={colors.vGray}
        fontSize={14}
        fontWeight={fontWeight.normal}
      >{`${sname} ${direction}`}</Paragraph>
    </Box>
  );
};

export default NextDepartureBox;
