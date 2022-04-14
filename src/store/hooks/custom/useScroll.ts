import { useEffect } from 'react';
import { useScrollDispatch } from '../scrollHook';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useScroll = (ref: any) => {
  const { setScrollWidth, setScrollHeight } = useScrollDispatch();
  useEffect(() => {
    const { current } = ref;
    const trigger = () => {
      setScrollWidth(current.clientWidth);
      setScrollHeight(current.clientHeight);
    };

    if (current) {
      if ('ResizeObserver' in window) {
        new ResizeObserver(trigger).observe(current);
      }
      trigger();
    }
  }, [ref, setScrollWidth, setScrollHeight]);
  return {};
};
