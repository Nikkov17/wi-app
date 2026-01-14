import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Link, Typography } from '@mui/material';
import { COLOR, FONT, FONT_SIZE, CSS_VALUES } from '../../constants';

export const Contacts = () => {
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
            fontSize: `${FONT_SIZE.sectionTitle}px`,
            fontFamily: FONT.common.title,
            lineHeight: '50px',
          }}
          color={COLOR.base}
        >
          Контакты
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            fontFamily: FONT.ru.base,
            fontWeight: 500,
            marginTop: '24px',
          }}
          color={COLOR.base}
        >
          По всем вопросам вы можете обращаться к нашему свадебному организатору.
        </Typography>
        <Link
          href={`tel:+375445600408`}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            color: 'inherit',
            marginTop: '16px',
            textDecoration: 'underline',
            textDecorationThickness: '1px',
            textDecorationColor: COLOR.base,
            textUnderlineOffset: '2px',
          }}
        >
          <PhoneIcon
            sx={{
              p: '10px',
              borderRadius: '30px',
              backgroundColor: COLOR.light,
              color: COLOR.milkWhite,
            }}
            fontSize="small"
          />
          <Typography
            sx={{
              fontSize: '14px',
              fontFamily: FONT.ru.base,
              fontWeight: 500,
            }}
            color={COLOR.base}
          >
            +375 44 5600408
          </Typography>
        </Link>
        <Typography
          sx={{
            fontSize: '14px',
            fontFamily: FONT.ru.base,
            fontWeight: 500,
          }}
          color={COLOR.base}
        >
          Ольга
        </Typography>
      </Box>
    </Box>
  );
};
