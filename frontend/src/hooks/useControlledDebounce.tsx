import { useState } from 'react';
import { debounce } from 'lodash';

const debounceControledInput = debounce(
  (value: string, dispatch: (v: string) => void) => dispatch(value),
  500,
);

export const useControledDebounce = (init: string = '') => {
  const [value, setValue] = useState(init);
  const [debouncedValue, setDebouncedValue] = useState(init);
  const handleValue = (v: string) => {
    setValue(v);
    return debounceControledInput(v, setDebouncedValue);
  };

  const setInputValue = (value: string) => setValue(value);

  return { value, debouncedValue, handleValue, setInputValue };
};
