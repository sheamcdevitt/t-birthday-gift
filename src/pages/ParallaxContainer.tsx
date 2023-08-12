import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import * as React from 'react';
import { Intro } from './ContainerComponents/1-Intro';
import ImageCarousel from './ImageCarousel';
import { Repercussion } from './Repercussion';

export const useStyles = makeStyles(() => ({
  parallax: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    width: '80vw',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  },
}));

const ParallaxContainer = () => {
  const parallax = React.useRef<IParallax | null>(null);

  return (
    <Box bgcolor='#01128e' height='100vh' width='100vw'>
      {/* <AudioButton audio={audio} /> */}
      <Parallax pages={6.75} ref={parallax}>
        <Intro />
        <ParallaxLayer
          sticky={{ start: 0.75, end: 1.35 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
          }}
        >
          <Typography
            className='glitch layers'
            color='white'
            fontSize={42}
            textAlign='center'
            ml={{
              md: 0,
            }}
          >
            FOR ROUND <span>3?</span>
          </Typography>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 1.45, end: 1.7 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
          }}
        >
          <Typography
            color='white'
            fontSize={42}
            textAlign='center'
            ml={{
              md: 0,
            }}
          >
            GET READY FOR...
          </Typography>
        </ParallaxLayer>
        <Repercussion />
        <ParallaxLayer
          sticky={{ start: 2.4, end: 2.8 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
          }}
        >
          <Box>
            <Typography color='white' fontSize={38.5} textAlign='left'>
              16.09.23
            </Typography>
            <Typography
              color='white'
              fontSize={42}
              textAlign='center'
              lineHeight={0.3}
            >
              DEPOT. MAYFIELD
            </Typography>
            <Typography
              color='white'
              fontSize={52.5}
              textAlign='center'
              lineHeight={1.3}
            >
              MANCHESTER
            </Typography>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 3, end: 3.4 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
          }}
        >
          <Box>
            <Typography
              color='white'
              fontSize={42}
              textAlign='center'
              lineHeight={0.3}
            >
              WITH SPECIAL
            </Typography>
            <Typography
              color='white'
              fontSize={55}
              textAlign='center'
              lineHeight={1.3}
            >
              GUESTS
            </Typography>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 3.6, end: 4 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
          }}
        >
          <Box>
            <Typography
              lineHeight={0.6}
              color='white'
              fontSize={52}
              textAlign='center'
            >
              SHEA | ADAM
            </Typography>
            <Typography color='white' fontSize={42} textAlign='center'>
              COLLEEN | BILLY
            </Typography>
            <Typography
              color='white'
              fontSize={28}
              textAlign='center'
              lineHeight={0.5}
            >
              LAURYN | AHLEM | LUCIE
            </Typography>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 4.3, end: 5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
          }}
        >
          <Box>
            <Typography
              color='white'
              fontSize={28}
              textAlign='center'
              lineHeight={0.6}
            >
              HAPPY BIRTHDAY
            </Typography>
            <Typography color='white' fontSize={50} textAlign='center'>
              THOMAS!
            </Typography>
            <Typography color='white' fontSize={22} textAlign='center'>
              FROM ADAM & SHEA
            </Typography>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5.75}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
          }}
        >
          <ImageCarousel />
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
};

export default ParallaxContainer;
