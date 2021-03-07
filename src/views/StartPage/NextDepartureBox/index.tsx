import Heading, { HeadingType } from 'components/Heading';
import Paragraph from 'components/Paragraph';
import colors from 'tokens/colors';
import { Departure, FontWeight } from 'types';
import { Box } from './styles';

const NextDepartureBox = (props: Departure) => {
  const { stop, time, rtTime, direction, sname } = props;
  const shouldShowRtTime = () => rtTime !== time;
  return (
    <Box>
      <Heading
        headingType={HeadingType.H1}
        fontWeight={FontWeight.medium}
        fontSize={18}
        color={colors.secondGray}
      >
        Departs
      </Heading>
      <Heading
        headingType={HeadingType.H2}
        fontWeight={FontWeight.medium}
        fontSize={28}
        color={colors.vBlack}
      >
        {stop}
      </Heading>
      <Heading
        headingType={HeadingType.H2}
        fontWeight={FontWeight.bold}
        fontSize={34}
        color={colors.vBlue}
      >
        {time}
      </Heading>
      {shouldShowRtTime() && (
        <Heading
          headingType={HeadingType.H3}
          fontWeight={FontWeight.medium}
          fontSize={24}
          color={colors.vBlack}
        >
          ({rtTime})
        </Heading>
      )}
      <Paragraph
        color={colors.vGray}
        fontSize={14}
        fontWeight={FontWeight.normal}
      >{`${sname} ${direction}`}</Paragraph>
    </Box>
  );
};

export default NextDepartureBox;
