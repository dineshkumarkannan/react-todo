import { useState } from "react";

function useLocalStorage(key, initialVal) {
  const [value, setValue] = useState(() => {
    try {
      const localVal = localStorage.getItem(key);
      if (localVal) {
        return JSON.parse(localVal);
      } else {
        localStorage.setItem(key, JSON.stringify(initialVal));
        return initialVal;
      }
    } catch (error) {
      localStorage.setItem(key, JSON.stringify(initialVal));
      return initialVal;
    }
  });

  function setLocalStorage(newValue) {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  }

  return [value, setLocalStorage];
}

export default useLocalStorage;
