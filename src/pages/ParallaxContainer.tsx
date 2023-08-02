import * as React from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { Box, Typography, IconButton } from '@mui/material';
import Clock from './Clock';
import { ArrowDownward } from '@mui/icons-material';

const NavButton = ({ onNavDown }: { onNavDown: () => void }) => {
  return (
    <IconButton
      sx={{
        position: 'absolute',
        bottom: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
      }}
      onClick={onNavDown}
    >
      <ArrowDownward fontSize='large' />
    </IconButton>
  );
};

const ParallaxContainer = () => {
  const alignCenter = { display: 'flex', alignItems: 'center' };
  const parallax = React.useRef<IParallax>(null!);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const onNavDown = () => {
    if (currentSlide < 2) {
      parallax.current.scrollTo(currentSlide + 1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <Box bgcolor='#01128e' height='100vh' width='100vw'>
      <Parallax pages={10} ref={parallax}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            ...alignCenter,
            justifyContent: 'center',
            margin: '0 auto',
            flexDirection: 'column',
          }}
        >
          <Typography
            fontSize={60}
            color='white'
            textAlign='center'
            lineHeight={1}
            mb={{
              xs: 4,
              md: 0,
            }}
          >
            ARE YOU READY?
          </Typography>
          <Clock />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.75, end: 1.4 }}
          style={{
            ...alignCenter,
            justifyContent: 'center',
            margin: '0 auto',
          }}
        >
          <Typography
            color='white'
            fontSize={42}
            textAlign='center'
            ml={{
              xs: '10%',
              md: 0,
            }}
          >
            ROUND
          </Typography>
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.2}
          style={{ ...alignCenter, justifyContent: 'flex-start' }}
          sticky={{ start: 0.9, end: 1.4 }}
        >
          <Typography
            color='white'
            fontSize={42}
            textAlign='center'
            ml={{
              md: '39%',
              xs: '15%',
            }}
          >
            FOR
          </Typography>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.4}
          style={{ ...alignCenter, justifyContent: 'flex-end' }}
          sticky={{ start: 1.1, end: 1.4 }}
        >
          <Typography
            color='white'
            fontSize={42}
            textAlign='center'
            mr={{
              md: '41.5%',
              xs: '14%',
            }}
          >
            3?
          </Typography>
        </ParallaxLayer>
      </Parallax>
      <NavButton onNavDown={onNavDown} />
    </Box>
  );
};

export default ParallaxContainer;
