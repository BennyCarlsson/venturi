import Paragraph from 'components/Paragraph';
import { Legs } from 'types';
import { Box, DepartureWrapper } from './styles';

type Departures = {
  legs: Legs[];
};

const OtherDeparturesBox = (props: Departures) => {
  const { legs } = props;
  return (
    <Box>
      {legs.map((leg) => {
        return (
          <DepartureWrapper key={leg.Leg?.id}>
            <Paragraph>{leg.Leg?.Origin?.time}</Paragraph>
            <p>{leg.Leg.direction}</p>
            <p>{leg.Leg.sname}</p>
          </DepartureWrapper>
        );
      })}
    </Box>
  );
};

export default OtherDeparturesBox;
