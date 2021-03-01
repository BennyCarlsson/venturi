import { getDepartureBoard, DepartureBoard, Departure, ApiError } from 'api/vasttrafik/vasttrafik';
import React, { useCallback, useEffect, useState } from 'react';
import { Heading } from './styles';

const spaldingsgatan = '9021014006160000';
//const nordstan = '9021014004945000';

function StartPage() {
  const [departures, setDepartures] = useState<Departure[]>([]);
  const [error, setError] = useState<ApiError | null>(null);

  const getTimeTable = useCallback(async () => {
    const data = await getDepartureBoard(spaldingsgatan);
    if ((data as ApiError).DepartureBoard.error) {
      setError(data as ApiError);
    } else {
      setDepartures((data as DepartureBoard).DepartureBoard.Departure);
    }
    console.log(data);
  }, []);

  useEffect(() => {
    getTimeTable();
  }, [getTimeTable]);

  const renderDepartures = () => {
    return departures.map((departure) => {
      return (
        <div>
          <h2>{departure.stop}</h2>
          <h3>{`${departure.name} ${departure.direction}`}</h3>
          <p>Spår: {departure.track}</p>
          <p>Tid: {departure.time}</p>
          <p>Förväntad Tid: {departure.rtTime}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <Heading>Departs</Heading>
      {error && <h2>{error.DepartureBoard.error}</h2>}
      {error && <p>{error.DepartureBoard.errorText}</p>}
      {departures.length > 1 && renderDepartures()}
    </div>
  );
}

export default StartPage;
