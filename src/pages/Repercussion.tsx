import { Box, useMediaQuery, useTheme } from '@mui/material';
import { ParallaxLayer } from '@react-spring/parallax';
import img0 from 'assets/images/0.png';
import img1 from 'assets/images/1.png';
import img2 from 'assets/images/2.png';
import img3 from 'assets/images/3-main.png';
import img4 from 'assets/images/4.png';
import img5 from 'assets/images/5.png';
import img6 from 'assets/images/6.png';
import img7 from 'assets/images/7.png';
import img8 from 'assets/images/8.png';
import blur from 'assets/images/bg-blur.png';
import React from 'react';
import { useStyles } from './ParallaxContainer';

const speedMap = {
  desktop: {
    img0: 0.85,
    img1: 0.9,
    img2: 0.95,
    img3: 1,
    img4: 1.1,
    img5: 1,
    img6: 0.95,
    img7: 1.1,
    img8: 1,
    blur: 1.1,
  },
  mobile: {
    img0: 0.85,
    img1: 0.9,
    img2: 0.95,
    img3: 1,
    img4: 1.1,
    img5: 1.2,
    img6: 1.25,
    img7: 1.3,
    img8: 1.35,
    blur: 1.1,
  },
};

export const Repercussion = () => {
  const styles = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const speedConfig = isDesktop ? speedMap.desktop : speedMap.mobile;

  return (
    <Box>
      {Object.entries(speedConfig).map(([img, speed]) => {
        const image = {
          img8,
          img7,
          img6,
          img5,
          img4,
          img3,
          blur,
          img2,
          img1,
          img0,
        }[img];

        return (
          <ParallaxLayer factor={2} key={img} offset={2.5} speed={speed}>
            <img className={styles.parallax} alt='' src={image} />
          </ParallaxLayer>
        );
      })}
    </Box>
  );
};
