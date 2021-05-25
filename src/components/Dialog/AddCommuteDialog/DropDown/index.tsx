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
  const shouldRender = () => show && Array.isArray(locations) && locations.length > 0;
  return (
    <Fragment>
      {shouldRender() && (
        <Ul>
          {locations?.map((loc) => (
            <Li
              key={`key-${loc.id}`}
              onClick={(e) => {
                e.preventDefault();
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
