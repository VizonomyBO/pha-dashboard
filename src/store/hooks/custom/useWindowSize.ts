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

    let resizer: ResizeObserver;
    if (current) {
      if ('ResizeObserver' in window) {
        resizer = new ResizeObserver(trigger);
        resizer.observe(current);
      }
      trigger();
    }
    return () => {
      if (resizer) {
        resizer.disconnect();
      }
    };
  }, [ref]);
  return {
    width,
    height,
    ref
  };
};
