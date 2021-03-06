import { Departure } from 'types';
import { Box, DepartureWrapper } from './styles';

type Departures = {
  departures: Departure[];
};

const OtherDeparturesBox = (props: Departures) => {
  const { departures } = props;
  return (
    <Box>
      {departures.map((departure) => {
        return (
          <DepartureWrapper>
            <p>{departure.time}</p>
            <p>{departure.direction}</p>
            <p>{departure.sname}</p>
          </DepartureWrapper>
        );
      })}
    </Box>
  );
};

export default OtherDeparturesBox;