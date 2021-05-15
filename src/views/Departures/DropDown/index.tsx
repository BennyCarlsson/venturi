import { Fragment } from 'react';
import { Location } from 'redux/locationsSlice';
import { Li, Ul } from './styles';

type DropDownProps = {
  locations: Location[] | undefined;
  setInput: (value: React.SetStateAction<string>) => void;
  setLocation: (value: React.SetStateAction<Location | null>) => void;
  show: boolean;
};

const DropDown = ({ locations, setInput, setLocation, show }: DropDownProps) => {
  return (
    <Fragment>
      {show && (
        <Ul>
          {locations?.map((loc) => (
            <Li
              key={`key-${loc.id}`}
              onClick={(e) => {
                e.preventDefault();
                console.log(loc.id);
                setInput(loc.name);
                setLocation(loc);
              }}
            >
              {loc.name}
            </Li>
          ))}
        </Ul>
      )}
    </Fragment>
  );
};

export default DropDown;
