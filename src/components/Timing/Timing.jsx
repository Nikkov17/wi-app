import PeopleIcon from '@mui/icons-material/People';
import CakeIcon from '@mui/icons-material/Cake';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WeddingRing from '../../assets/wedding-ring.png';
import { Box, Typography } from '@mui/material';
import { COLOR, FONT, CSS_VALUES } from '../../constants';

export const Timing = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box',
        padding: `${CSS_VALUES.sectionIndent * 2}px ${CSS_VALUES.sectionIndent}px`,
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
          sx={{
            fontSize: '48px',
            fontFamily: FONT.common.title,
            lineHeight: '50px',
          }}
          color={COLOR.base}
        >
          ТАЙМИНГ
          <br />
          ДНЯ
        </Typography>
        <Box
          sx={{
            margin: '48px 24px 0',
            display: 'flex',
            alignItems: 'start',
            flexDirection: 'column',
            gap: '40px',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '2px',
              height: '100%',
              backgroundColor: COLOR.light,
              left: '27px',
              zIndex: '-1',
            }}
          ></Box>
          <Box sx={{ gap: '8px', display: 'flex', alignItems: 'center' }}>
            <PeopleIcon
              sx={{
                p: '10px',
                borderRadius: '30px',
                backgroundColor: COLOR.light,
                color: COLOR.milkWhite,
              }}
              fontSize="large"
            />
            <Typography
              sx={{
                fontFamily: FONT.ru.base,
                fontWeight: 600,
                textAlign: 'start',
              }}
              color={COLOR.base}
            >
              15:30
              <br />
              Сбор гостей
            </Typography>
          </Box>
          <Box sx={{ gap: '8px', display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                p: '10px',
                paddingBottom: '8px',
                paddingTop: '12px',
                borderRadius: '30px',
                backgroundColor: COLOR.light,
                color: COLOR.milkWhite,
              }}
            >
              <Box component="img" src={WeddingRing} sx={{ width: '35px', height: '31px' }} />
            </Box>
            <Typography
              sx={{
                fontFamily: FONT.ru.base,
                fontWeight: 600,
                textAlign: 'start',
              }}
              color={COLOR.base}
            >
              16:00
              <br />
              Церемония бракосочетания
            </Typography>
          </Box>
          <Box sx={{ gap: '8px', display: 'flex', alignItems: 'center' }}>
            <RestaurantIcon
              sx={{
                p: '10px',
                borderRadius: '30px',
                backgroundColor: COLOR.light,
                color: COLOR.milkWhite,
              }}
              fontSize="large"
            />
            <Typography
              sx={{
                fontFamily: FONT.ru.base,
                fontWeight: 600,
                textAlign: 'start',
              }}
              color={COLOR.base}
            >
              17:00
              <br />
              Свадебный Банкет
            </Typography>
          </Box>
          <Box sx={{ gap: '8px', display: 'flex', alignItems: 'center' }}>
            <CakeIcon
              sx={{
                p: '10px',
                borderRadius: '30px',
                backgroundColor: COLOR.light,
                color: COLOR.milkWhite,
              }}
              fontSize="large"
            />
            <Typography
              sx={{
                fontFamily: FONT.ru.base,
                fontWeight: 600,
                textAlign: 'start',
              }}
              color={COLOR.base}
            >
              20:00
              <br />
              Торт
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
