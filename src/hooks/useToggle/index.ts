import { useState, useCallback } from 'react';

export function useToggle(defaultValue: boolean): [boolean, (value?: boolean) => void] {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toggleValue = useCallback((_value?: boolean) => {
    if (_value !== undefined) {
      setValue((currentValue) => !currentValue);
    }
    setValue((currentValue) => (typeof _value === 'boolean' ? _value : !currentValue));
  }, []);

  return [value, toggleValue];
}
