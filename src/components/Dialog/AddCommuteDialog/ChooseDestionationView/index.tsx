import Paragraph from 'components/Paragraph';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useCallback, useRef, useState } from 'react';
import {
  fetchDestinationLocationsOnName,
  fetchOriginLocationsOnName,
  Location
} from 'redux/locationsSlice';
import { setCurrentTable } from 'redux/tripSlice';
import DropDown from '../DropDown';
import SearchInput from '../SearchInput';
import { saveOriginAndDestination } from 'utils/localStorage';
import { StyledButton, StyledParagraph, StyledTitleHeading, InputDropDownWrapper, StyledToParagraph } from './styles';

let timeout: any;
const debounce = (fn: Function, delay: number) => {
  if (timeout !== undefined) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(fn, delay);
};

type ChooseDestionationViewProps = {};

const ChooseDestionationView = ({ ...props }: ChooseDestionationViewProps) => {
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
    <React.Fragment {...props}>
      <span>
        <StyledTitleHeading headingType={'h2'} fontSize={28}>
          Destination
        </StyledTitleHeading>
        <StyledParagraph fontSize={14}>
          Välj destinationer för din resa. Du kan alltid ändra eller lägga till flera vid ett senare
          tillfälle.
        </StyledParagraph>
        <Paragraph fontSize={18}>Från</Paragraph>
        <InputDropDownWrapper>
          <SearchInput
            data-testid="from-input"
            value={originInput}
            onChange={originInputOnChange}
            setShowDropDown={setShowOriginDropDown}
          />
          <DropDown
            locations={originLocations?.slice(0, 7)}
            setInput={setOriginInput}
            setLocation={setOriginLocation}
            show={showOriginDropDown}
          />
        </InputDropDownWrapper>
        <StyledToParagraph fontSize={18}>Till</StyledToParagraph>
        <InputDropDownWrapper>
        <SearchInput
          data-testid="to-input"
          value={destinationInput}
          onChange={destinationOnChange}
          setShowDropDown={setShowDestinationDropDown}
        />
        <DropDown
          locations={destinationLocations?.slice(0, 7)}
          setInput={setDestinationInput}
          setLocation={setDestinationLocation}
          show={showDestinationDropDown}
        />
        </InputDropDownWrapper>
      </span>
      <StyledButton
        onClick={() => {
          if (originLocation && destinationLocation)
            dispatch(setCurrentTable({ origin: originLocation, destination: destinationLocation }));
          saveOriginAndDestination({
            origin: originLocation as Location,
            destination: destinationLocation as Location
          });
        }}
      >
        Namnge din resa
      </StyledButton>
      {error && <h2>{error}</h2>}
    </React.Fragment>
  );
};

export default ChooseDestionationView;
