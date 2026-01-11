import { Box, Typography, Button } from '@mui/material';
import { COLOR, FONT, CSS_VALUES } from '../../constants';

export const Form = () => {
  return (
    <Box
      sx={{
        marginTop: `${CSS_VALUES.marginBetweenSections}px`,
        marginLeft: `${CSS_VALUES.sectionSideMargin}px`,
        marginRight: `${CSS_VALUES.sectionSideMargin}px`,
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
        Анкета гостя
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
        Ваши ответы на вопросы помогут нам при организации торжества. Будем ждать ответ до
        01.06.2026.
      </Typography>
      <Button
        href="https://forms.gle/q8A62peVgbbpDUZg9"
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
        ЗАПОЛНИТЬ АНКЕТУ
      </Button>
    </Box>
  );
};
