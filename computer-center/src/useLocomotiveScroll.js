import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const useLocomotiveScroll = () => {
  useEffect(() => {
    const scrollEl = document.querySelector('.all-content');

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
};

export default useLocomotiveScroll;
