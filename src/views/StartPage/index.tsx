import { getDepartureBoard } from 'api/vasttrafik/vasttrafik';
import React, { useCallback, useEffect, useState } from 'react';
import { ApiError, Departure, DepartureBoard } from 'types';
import NextDepartureBox from './NextDepartureBox';
import OtherDepartures from './OtherDeparturesBox';
import { StartPageWrapper } from './styles';

const spaldingsgatan = '9021014006160000';
//const nordstan = '9021014004945000';

const StartPage = () => {
  const [departures, setDepartures] = useState<Departure[]>([]);
  const [error, setError] = useState<ApiError | null>(null);

  const getTimeTable = useCallback(async () => {
    const data = await getDepartureBoard(spaldingsgatan);
    if ((data as ApiError).DepartureBoard.error) {
      setError(data as ApiError);
    } else {
      const departures = (data as DepartureBoard).DepartureBoard.Departure;
      setDepartures(departures);
    }
    console.log(data);
  }, []);

  useEffect(() => {
    getTimeTable();
  }, [getTimeTable]);

  return (
    <StartPageWrapper>
      {departures.length > 0 && (
        <React.Fragment>
          <NextDepartureBox {...departures[0]} />
          <OtherDepartures departures={departures.slice(1, 4)} />
        </React.Fragment>
      )}
      {error && <h2>{error.DepartureBoard.error}</h2>}
      {error && <p>{error.DepartureBoard.errorText}</p>}
    </StartPageWrapper>
  );
};

export default StartPage;
