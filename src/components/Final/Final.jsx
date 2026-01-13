import { Box, Typography } from '@mui/material';
import { COLOR, FONT, CSS_VALUES } from '../../constants';

export const Final = () => {
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
            fontFamily: FONT.ru.cursive,
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '40px',
          }}
          color={COLOR.base}
        >
          Будем вас ждать!
          <br /> С любовью,
          <br /> Николай и Виктория.
        </Typography>
      </Box>
    </Box>
  );
};
