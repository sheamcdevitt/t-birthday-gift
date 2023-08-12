import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import img1 from 'assets/images/001.jpg';
import img2 from 'assets/images/002.jpg';
import img3 from 'assets/images/003.jpg';
import img4 from 'assets/images/004.jpg';
import img5 from 'assets/images/005.jpg';
import img6 from 'assets/images/006.jpg';
import img7 from 'assets/images/007.jpg';
import img8 from 'assets/images/008.jpg';
import img9 from 'assets/images/009.jpg';
import img10 from 'assets/images/010.jpg';
import img11 from 'assets/images/011.jpg';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = React.useMemo(() => {
    return [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Two minutes in milliseconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <Box>
      <img
        alt='t-bag'
        src={images[currentIndex]}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </Box>
  );
};

export default ImageCarousel;
