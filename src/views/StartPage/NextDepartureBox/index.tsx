import Heading, { HeadingType } from 'components/Heading';
import Paragraph from 'components/Paragraph';
import colors from 'tokens/colors';
import { FontWeight, Leg } from 'types';
import { Box } from './styles';

const NextDepartureBox = (props: Leg) => {
  const { Origin, direction, sname } = props;
  const shouldShowRtTime = () => Origin?.rtTime !== Origin?.time;
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
        {Origin?.name}
      </Heading>
      <Heading
        headingType={HeadingType.H2}
        fontWeight={FontWeight.bold}
        fontSize={34}
        color={colors.vBlue}
      >
        {Origin?.time}
      </Heading>
      {shouldShowRtTime() && (
        <Heading
          headingType={HeadingType.H3}
          fontWeight={FontWeight.medium}
          fontSize={24}
          color={colors.vBlack}
        >
          ({Origin?.rtTime})
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
