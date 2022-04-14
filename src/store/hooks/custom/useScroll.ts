import { useEffect } from 'react';
import { useScrollDispatch } from '../scrollHook';

export const useScroll = (ref: any) => {
  const { setScrollWith, setScrollHeight } = useScrollDispatch();
  useEffect(() => {
    const { current } = ref;
    const trigger = () => {
      setScrollWith(current.clientWidth);
      setScrollHeight(current.clientHeight);
    };

    if (current) {
      if ('ResizeObserver' in window) {
        new ResizeObserver(trigger).observe(current);
      }
      trigger();
    }
  }, [ref, setScrollWith, setScrollHeight]);
  return {};
};
