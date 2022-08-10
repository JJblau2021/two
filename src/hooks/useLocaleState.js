import { useState, useRef } from 'react';
export default function (
  localeName,
  { defaultValue, serializer = JSON.stringify, deserializer = JSON.parse },
) {
  const localeValue = localStorage.getItem(localeName);
  const [state, setState] = useState(() => {
    return localeValue ? deserializer(localeValue) : defaultValue;
  });
  const handleSetState = useRef();
  handleSetState.current = (newState) => {
    let newLocalteState = serializer(newState);
    if (typeof newState === 'function') {
      newLocalteState = serializer(newState(state));
    }
    localStorage.setItem(localeName, newLocalteState);
    setState(newState);
  };

  return [state, handleSetState.current];
}
