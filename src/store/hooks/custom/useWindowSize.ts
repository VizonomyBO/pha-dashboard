import { useEffect, useState, useRef } from 'react';
import { useScrollDispatch, useScrollState } from '../scrollHook';

export const useWindowSize = () => {
  const { widthScroll, heightScroll } = useScrollState();
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(widthScroll);
  const [height, setHeight] = useState(heightScroll);
  const { setScrollWidth, setScrollHeight } = useScrollDispatch();
  useEffect(() => {
    const { current } = ref;
    const trigger = () => {
      if (current) {
        setWidth(current.clientWidth);
        setHeight(current.clientHeight);
        setScrollWidth(current.clientWidth);
        setScrollHeight(current.clientHeight);
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
  }, [ref, setScrollWidth, setScrollHeight]);
  return {
    width,
    height,
    ref
  };
};
