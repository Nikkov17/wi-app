import Img1 from '../../assets/img-1.jpg';
import { Box, Typography } from '@mui/material';
import { COLOR, FONT, CSS_VALUES } from '../../constants';

export const Heading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box',
        padding: `${CSS_VALUES.sectionIndent}px`,
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
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontFamily: FONT.common.title, fontWeight: 500, fontSize: '68px' }}
            color={COLOR.base}
          >
            WEDDING
          </Typography>
          <Typography
            sx={{
              textAlign: 'end',
              position: 'absolute',
              top: '30px',
              right: '10px',
              fontFamily: FONT.en.cursive,
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '60px',
            }}
            color={COLOR.light}
          >
            day
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: FONT.common.date,
              fontWeight: 400,
              fontStyle: 'normal',
              mt: '10px',
            }}
            color={COLOR.base}
          >
            25.06.2026
          </Typography>
        </Box>

        <Box sx={{ marginTop: '24px' }}>
          <Box
            component="img"
            alt={'Коля и Вика'}
            src={Img1}
            sx={{
              borderRadius: '20px',
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
          <Typography
            sx={{
              marginLeft: '90px',
              fontFamily: FONT.ru.cursive,
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '60px',
              lineHeight: '10px',
              marginTop: '60px',
            }}
            color={COLOR.base}
          >
            Николай
          </Typography>
          <Typography
            sx={{
              marginRight: '90px',
              fontFamily: FONT.ru.cursive,
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '60px',
            }}
            color={COLOR.base}
          >
            Виктория
          </Typography>
        </Box>

        <Box sx={{ marginTop: `${CSS_VALUES.sectionIndent}px` }}>
          <Typography
            sx={{
              fontSize: '28px',
              fontFamily: FONT.common.title,
            }}
            color={COLOR.base}
          >
            РОДНЫЕ И ЛЮБИМЫЕ!
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              marginTop: '16px',
              fontFamily: FONT.ru.base,
              fontWeight: 500,
            }}
            color={COLOR.base}
          >
            Мы рады сообщить вам, что состоится долгожданное событие - наша свадьба! Мы искренне
            хотим разделить наше счастье в кругу семьи и близких нам людей!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
