import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import Colors from 'tokens/colors';
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
          headingType={'h1'}
          fontWeight={FontWeight.medium}
          fontSize={18}
          color={Colors.white}
        >
          Departs from
        </Heading>
        <DepartsWrapper>
          {/* Todo: icon after type */}
          <StyledTrailLogo />
          <Heading
            headingType={'h2'}
            fontWeight={FontWeight.medium}
            fontSize={28}
            color={Colors.white}
          >
            {name}
          </Heading>
        </DepartsWrapper>
      </TopPart>
      <BottomPart>
        <BottomLeftPart>
          <Paragraph fontWeight={FontWeight.medium} fontSize={14} color={Colors.white}>
            Platform
          </Paragraph>
          <BottomParagraph fontWeight={FontWeight.medium} fontSize={24} color={Colors.white}>
            {track}
          </BottomParagraph>
        </BottomLeftPart>
        <BottomRightPart>
          <Paragraph fontWeight={FontWeight.medium} fontSize={14} color={Colors.white}>
            Destination name
          </Paragraph>
          <BottomParagraph fontWeight={FontWeight.medium} fontSize={24} color={Colors.white}>
            Placeholder
          </BottomParagraph>
        </BottomRightPart>
      </BottomPart>
    </NextDepartureWrapper>
  );
};

export default DepartureBox;
