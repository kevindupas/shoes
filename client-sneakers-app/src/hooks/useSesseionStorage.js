import { useState } from "react";

export const useSeessionStorage = (keyName, defaultValue) => {
  console.log('useSessionStorage')
  const [sessionValue, setSessionValue] = useState(() => {
    try {
      const value = window.sessionStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {

        window.sessionStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    try {
      window.sessionStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setSessionValue(newValue);
  };
  return [sessionValue, setValue];
};