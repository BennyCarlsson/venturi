import Paragraph from 'components/Paragraph';
import { useState } from 'react';
import Colors from 'tokens/colors';
import { FontWeight, Legs } from 'types';
import ChevronIcon from './ChevronIcon';
import {
  Box,
  DepartureWrapper,
  NameBox,
  TimeAndDirectionWrapper,
  DirectionParagraph,
  TitleParagraph,
  Top,
  Content
} from './styles';

type Departures = {
  legs: Legs[];
};

const OtherDepartures = (props: Departures) => {
  const { legs } = props;
  const [showContent, setShowContent] = useState(false);

  const variant = {
    initial: { height: 0 },
    animate: { height: showContent ? 'fit-content' : 0, transition: { duration: 0.3 } }
  };

  const chevron = {
    animate: { rotate: showContent ? 180 : 0, transition: { duration: 0.2 } }
  };

  return (
    <Box>
      <Top
        onClick={(e) => {
          e.preventDefault();
          setShowContent((prevState) => !prevState);
        }}
      >
        <span />
        <TitleParagraph center color={Colors.white} fontSize={18} fontWeight={FontWeight.medium}>
          Other departures
        </TitleParagraph>
        <ChevronIcon variants={chevron} animate={'animate'} />
      </Top>

      <Content variants={variant} animate={'animate'} initial={'initial'}>
        {legs.map((leg) => {
          return (
            <DepartureWrapper key={leg.Leg?.id}>
              <TimeAndDirectionWrapper>
                <Paragraph fontSize={18} color={Colors.white}>
                  {leg.Leg?.Origin?.time}
                </Paragraph>
                <DirectionParagraph fontSize={18} color={Colors.white}>
                  {leg.Leg.direction}
                </DirectionParagraph>
              </TimeAndDirectionWrapper>
              <NameBox>
                <Paragraph fontSize={14}>{leg.Leg.sname}</Paragraph>
              </NameBox>
            </DepartureWrapper>
          );
        })}
      </Content>
    </Box>
  );
};

export default OtherDepartures;
