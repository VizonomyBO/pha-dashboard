import { useEffect, useState, useRef } from 'react';

export const useWindowSize = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const { current } = ref;
    const trigger = () => {
      if (current) {
        setWidth(current.clientWidth);
        setHeight(current.clientHeight);
      }
    };

    if (current) {
      if ('ResizeObserver' in window) {
        new ResizeObserver(trigger).observe(current);
      }
      trigger();
    }
  }, [ref]);
  return {
    width,
    height,
    ref
  };
};
