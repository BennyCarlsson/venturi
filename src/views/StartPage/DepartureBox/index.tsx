import Heading, { HeadingType } from 'components/Heading';
import Paragraph from 'components/Paragraph';
import colors from 'tokens/colors';
import { FontWeight } from 'types';
import {
  BottomPart,
  BottomParagraph,
  BottomLeftPart,
  BottomRightPart,
  DepartsWrapper,
  NextDepartureWrapper,
  StyledTrailLogo,
  TopPart
} from './styles';

type NextDepartureBoxProps = {
  name: string | undefined;
  track: string | undefined;
};

const DepartureBox = (props: NextDepartureBoxProps) => {
  const { name, track } = props;
  return (
    <NextDepartureWrapper>
      <TopPart>
        <Heading
          headingType={HeadingType.H1}
          fontWeight={FontWeight.medium}
          fontSize={18}
          color={colors.white}
        >
          Departs from
        </Heading>
        <DepartsWrapper>
          {/* Todo: icon after type */}
          <StyledTrailLogo />
          <Heading
            headingType={HeadingType.H2}
            fontWeight={FontWeight.medium}
            fontSize={28}
            color={colors.white}
          >
            {name}
          </Heading>
        </DepartsWrapper>
      </TopPart>
      <BottomPart>
        <BottomLeftPart>
          <Paragraph fontWeight={FontWeight.medium} fontSize={14} color={colors.white}>
            Platform
          </Paragraph>
          <BottomParagraph fontWeight={FontWeight.medium} fontSize={24} color={colors.white}>
            {track}
          </BottomParagraph>
        </BottomLeftPart>
        <BottomRightPart>
          <Paragraph fontWeight={FontWeight.medium} fontSize={14} color={colors.white}>
            Destination name
          </Paragraph>
          <BottomParagraph fontWeight={FontWeight.medium} fontSize={24} color={colors.white}>
            Placeholder
          </BottomParagraph>
        </BottomRightPart>
      </BottomPart>
    </NextDepartureWrapper>
  );
};

export default DepartureBox;
