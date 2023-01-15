import { useState } from "react";

export const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const reset = () => {
    setCounter(initialValue);
  };
  const increment = (value = 1) => {
    setCounter((current) => current + value);
  };
  const decrement = (value = 1, minValue = 0) => {
    if (counter === minValue) return;
    if (counter - value < minValue) return setCounter(minValue);
    setCounter((current) => current - value);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
