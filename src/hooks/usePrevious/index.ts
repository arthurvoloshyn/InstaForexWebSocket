import { useRef, useEffect } from 'react';

const usePrevious = <T>(value: T): T => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current || value;
};

export default usePrevious;
