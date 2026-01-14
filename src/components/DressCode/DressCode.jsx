import { Box, Typography } from '@mui/material';
import { COLOR, FONT, CSS_VALUES } from '../../constants';

export const DressCode = () => {
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
          ДРЕСС КОД
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
          Чтобы сохранить особую атмосферу нашего праздника, будем признательны, если вы
          воздержитесь от ярких и кричащих цветов в одежде и выберете более спокойные и элегантные
          наряды. Благодарим за понимание и поддержку!
        </Typography>
      </Box>
    </Box>
  );
};
