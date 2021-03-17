import { getTrip } from 'api/vasttrafik/vasttrafik';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { ApiError, GetTripResponse, Legs } from 'types';
import DepartureBox from './DepartureBox';
import OtherDepartures from './OtherDeparturesBox';
import { StartPageWrapper } from './styles';

const spaldingsgatan = '9021014006160000';
const lillaBommen = '9021014004380000';
//const nordstan = '9021014004945000';
//const shouldShowRtTime = () => Origin?.rtTime !== Origin?.time;

const StartPage = () => {
  const [legs, setTrips] = useState<Legs[]>();
  const [error, setError] = useState<ApiError | null>(null);

  const getTimeTable = useCallback(async () => {
    const data = await getTrip(spaldingsgatan, lillaBommen);

    if ((data as ApiError).error) {
      console.log((data as ApiError).error);
    }

    const tripList = (data as GetTripResponse).TripList;
    if (tripList.error) {
      setError(data as ApiError);
    } else if (tripList) {
      const _legs = tripList.Trip as Legs[];
      console.log('tripList', tripList);
      console.log('_legs', _legs);
      setTrips(_legs);
    }
  }, []);

  useEffect(() => {
    getTimeTable();
  }, [getTimeTable]);

  return (
    <StartPageWrapper>
      {legs && legs.length > 0 && (
        <Fragment>
          <DepartureBox name={legs[0].Leg.Origin?.name} track={legs[0].Leg.Origin?.track} />
          <OtherDepartures legs={legs.slice(1, 4)} />
        </Fragment>
      )}
      {error && <h2>{error.error}</h2>}
      {error && <p>{error.errorText}</p>}
    </StartPageWrapper>
  );
};

export default StartPage;
