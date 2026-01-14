import { useState, useEffect, memo } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { keyframes } from '@mui/system';
import { COLOR, CSS_VALUES, FONT } from '../../constants';
import { calculateTimeLeft } from './helpers';

const flipAnimation = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`;

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [prevTime, setPrevTime] = useState(timeLeft);
  const [flipping, setFlipping] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  useEffect(() => {
    const newTime = calculateTimeLeft();
    if (newTime.days <= 0 && newTime.hours <= 0 && newTime.minutes <= 0 && newTime.seconds <= 0)
      return;

    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();

      Object.keys(newTime).forEach(key => {
        const unit = key;
        if (newTime[unit] !== prevTime[unit]) {
          setFlipping(prev => ({ ...prev, [unit]: true }));
          setTimeout(() => {
            setFlipping(prev => ({ ...prev, [unit]: false }));
          }, 300);
        }
      });

      setPrevTime(timeLeft);
      setTimeLeft(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, prevTime]);

  const TimeUnitBox = memo(
    ({ value, label, isFlipping }) => {
      const formattedValue = value.toString().padStart(2, '0');

      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Paper
              elevation={3}
              sx={{
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                backgroundColor: 'background.paper',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  backgroundColor: 'divider',
                  zIndex: 1,
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: isFlipping ? `${flipAnimation} 0.3s ease-in-out` : 'none',
                  transformStyle: 'preserve-3d',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    fontVariantNumeric: 'tabular-nums',
                    color: COLOR.light,
                  }}
                >
                  {formattedValue}
                </Typography>
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: '50%',
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  opacity: isFlipping ? 0.5 : 0,
                  transition: 'opacity 0.3s',
                }}
              />
            </Paper>
          </Box>
          <Typography
            variant="caption"
            color={COLOR.milkWhite}
            sx={{
              mt: '4px',
              textTransform: 'uppercase',
              fontWeight: 500,
              fontFamily: FONT.ru.base,
            }}
          >
            {label}
          </Typography>
        </Box>
      );
    },
    (prevProps, nextProps) => {
      return (
        prevProps.value === nextProps.value &&
        prevProps.label === nextProps.label &&
        prevProps.isFlipping === nextProps.isFlipping
      );
    },
  );

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box',
        padding: `${CSS_VALUES.sectionIndent}px ${CSS_VALUES.sectionIndent}px`,
        backgroundColor: COLOR.light,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: `${CSS_VALUES.sectionMaxWidth}px`,
        }}
      >
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ color: COLOR.milkWhite, fontFamily: FONT.common.title, fontSize: '28px' }}
        >
          ДО НАШЕЙ СВАДЬБЫ
          <br />
          ОСТАЛОСЬ...
        </Typography>
        <Grid
          container
          spacing={'10px'}
          justifyContent="center"
          sx={{ maxWidth: 600, mx: 'auto', marginTop: '12px' }}
        >
          <Grid item>
            <TimeUnitBox
              key={timeLeft.days}
              value={timeLeft.days}
              label="Дней"
              isFlipping={flipping['days']}
            />
          </Grid>

          <Grid item>
            <TimeUnitBox
              key={timeLeft.hours}
              value={timeLeft.hours}
              label="Часов"
              isFlipping={flipping['hours']}
            />
          </Grid>

          <Grid item>
            <TimeUnitBox
              key={timeLeft.minutes}
              value={timeLeft.minutes}
              label="Минут"
              isFlipping={flipping['minutes']}
            />
          </Grid>

          <Grid item>
            <TimeUnitBox
              key={timeLeft.seconds}
              value={timeLeft.seconds}
              label="Секунд"
              isFlipping={flipping['seconds']}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
