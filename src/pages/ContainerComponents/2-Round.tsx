import { Typography } from '@mui/material';
import { ParallaxLayer } from '@react-spring/parallax';

export const Round = () => {
  return (
    <ParallaxLayer
      sticky={{ start: 0.75, end: 2 }}
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
        FOR ROUND 3
      </Typography>
    </ParallaxLayer>
  );
};
