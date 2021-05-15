import Paragraph from 'components/Paragraph';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useCallback, useRef, useState } from 'react';
import {
  fetchDestinationLocationsOnName,
  fetchOriginLocationsOnName,
  Location
} from 'redux/locationsSlice';
import { setCurrentTable } from 'redux/tripSlice';
import { DeparturesWrapper } from './styles';
import DropDown from './DropDown';
import SearchInput from './SearchInput';

let timeout: any;
const debounce = (fn: Function, delay: number) => {
  if (timeout !== undefined) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(fn, delay);
};

const Departures = () => {
  const [originInput, setOriginInput] = useState('');
  const [showOriginDropDown, setShowOriginDropDown] = useState(false);
  const [destinationInput, setDestinationInput] = useState('');
  const [showDestinationDropDown, setShowDestinationDropDown] = useState(false);
  const [originLocation, setOriginLocation] = useState<Location | null>(null);
  const [destinationLocation, setDestinationLocation] = useState<Location | null>(null);

  const dispatch = useAppDispatch();
  const originLocations = useAppSelector((state) => state.locations.originLocations);
  const destinationLocations = useAppSelector((state) => state.locations.destinationLocations);
  const loading = useAppSelector((state) => state.locations.loadingDestination);
  const error = useAppSelector((state) => state.locations.destinationError);
  let promise = useRef<any>();

  const originInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOriginInput(value);
    debounce(() => {
      requestOrigin(value);
    }, 500);
  };

  const requestOrigin = useCallback(
    (value: string) => {
      if (value.length > 1) {
        if (promise.current && !error && loading) {
          promise.current.abort();
        }
        setShowOriginDropDown(true);
        promise.current = dispatch(fetchOriginLocationsOnName(value));
      } else {
        setShowOriginDropDown(false);
      }
    },
    [dispatch, error, loading]
  );

  const destinationOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDestinationInput(value);
    debounce(() => {
      requestDestination(value);
    }, 500);
  };
  const requestDestination = useCallback(
    (value: string) => {
      if (value.length > 1) {
        if (promise.current && !error && loading) {
          promise.current.abort();
        }
        setShowDestinationDropDown(true);
        promise.current = dispatch(fetchDestinationLocationsOnName(value));
      } else {
        setShowDestinationDropDown(false);
      }
    },
    [dispatch, error, loading]
  );

  return (
    <DeparturesWrapper>
      <Paragraph fontSize={18}>From</Paragraph>
      <SearchInput
        value={originInput}
        onChange={originInputOnChange}
        setShowDropDown={setShowOriginDropDown}
      />
      <DropDown
        locations={originLocations}
        setInput={setOriginInput}
        setLocation={setOriginLocation}
        show={showOriginDropDown}
      />
      <br />
      <Paragraph fontSize={18}>To</Paragraph>
      <SearchInput
        value={destinationInput}
        onChange={destinationOnChange}
        setShowDropDown={setShowDestinationDropDown}
      />
      <DropDown
        locations={destinationLocations}
        setInput={setDestinationInput}
        setLocation={setDestinationLocation}
        show={showDestinationDropDown}
      />
      <br />
      <br />
      <button
        onClick={() => {
          if (originLocation && destinationLocation)
            dispatch(setCurrentTable({ origin: originLocation, destination: destinationLocation }));
        }}
      >
        Save
      </button>
      {error && <h2>{error}</h2>}
    </DeparturesWrapper>
  );
};

export default Departures;
