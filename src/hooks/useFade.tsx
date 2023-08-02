import { useState, useEffect } from 'react';

export const useFade = (initial: boolean) => {
  const [show, setShow] = useState(initial);
  const [isVisible, setVisible] = useState(show);

  useEffect(() => {
    if (show) setVisible(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setVisible(false);
  };

  const style = { animation: `${show ? 'fadeIn' : 'fadeOut'} .3s` };

  const fadeProps = {
    style,
    onAnimationEnd,
  };

  return [isVisible, setShow, fadeProps];
};
