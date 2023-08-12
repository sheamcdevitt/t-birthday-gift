import { Typography } from '@mui/material';
import { ParallaxLayer } from '@react-spring/parallax';
import Clock from 'pages/Clock';

import React from 'react';

export const Intro = () => {
  return (
    <ParallaxLayer
      offset={0}
      speed={0.5}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        flexDirection: 'column',
      }}
    >
      <Typography
        className='glow glitch layers'
        data-text='ARE YOU READY?'
        fontSize={60}
        color='white'
        textAlign='center'
        lineHeight={1}
        mb={{
          xs: 4,
          md: 0,
        }}
      >
        <span>ARE YOU READY?</span>
      </Typography>
      <Clock />
    </ParallaxLayer>
  );
};
