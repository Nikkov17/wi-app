import Location1 from '../../assets/location1.jpeg';
import Location2 from '../../assets/location2.webp';
import { Box, Typography, Link, Button } from '@mui/material';
import { COLOR, FONT, CSS_VALUES } from '../../constants';

export const Location = () => {
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
          МЕСТО
          <br />
          ПРОВЕДЕНИЯ
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            marginTop: '24px',
            fontFamily: FONT.ru.base,
            fontWeight: 500,
          }}
          color={COLOR.base}
        >
          Ждем вас по адресу:
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            fontFamily: FONT.ru.base,
            fontWeight: 500,
          }}
          color={COLOR.base}
        >
          Минская область, Узденский район,
          <br /> деревня Русаково, Русаковская улица, 14
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            marginTop: '24px',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            alt={'Усадьба фото 1'}
            src={Location1}
            sx={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
          <Box
            component="img"
            alt={'Усадьба фото 1'}
            src={Location2}
            sx={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: '36px',
            marginTop: '16px',
            fontFamily: FONT.common.title,
            fontWeight: 500,
            textAlign: 'center',
          }}
        >
          &#171;
          <Link
            target="_blank"
            rel="noopener"
            color={COLOR.base}
            href="https://www.instagram.com/housedolcevita/"
            sx={{
              textDecorationThickness: '1px',
              textDecorationColor: COLOR.base,
              textUnderlineOffset: '2px',
            }}
          >
            La Dolce Vita
          </Link>
          &#187;
        </Typography>
        <Button
          href="https://yandex.by/maps/-/CLdN6S8D"
          target="_blank"
          rel="noopener"
          variant="contained"
          sx={{
            marginTop: '16px',
            borderRadius: '20px',
            backgroundColor: COLOR.light,
            fontFamily: FONT.common.title,
          }}
        >
          ПОСТРОИТЬ МАРШРУТ
        </Button>
      </Box>
    </Box>
  );
};
