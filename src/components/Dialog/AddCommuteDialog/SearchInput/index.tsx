import { Dispatch, SetStateAction } from "react";
import { Input } from "./styles";

type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setShowDropDown: Dispatch<SetStateAction<boolean>>;
};

const SearchInput = ({
  value,
  onChange,
  setShowDropDown,
  ...rest
}: SearchInputProps) => {
  return (
    <Input
      {...rest}
      value={value}
      onChange={onChange}
      onBlur={() => {
        setTimeout(() => {
          setShowDropDown(false);
        }, 100);
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
