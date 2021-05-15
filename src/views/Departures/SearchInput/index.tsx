import { Dispatch, SetStateAction } from 'react';
import { Input } from './styles';

type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setShowDropDown: Dispatch<SetStateAction<boolean>>;
};

const SearchInput = ({ value, onChange, setShowDropDown }: SearchInputProps) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      onBlur={() => {
        setTimeout(() => {
          setShowDropDown(false);
        }, 500);
      }}
      onFocus={() => {
        if (value.length > 1) {
          setShowDropDown(true);
        }
      }}
    />
  );
};

export default SearchInput;
