import { Box, Typography } from '@mui/material';
import { COLOR, FONT, FONT_SIZE, CSS_VALUES } from '../../constants';

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
            fontSize: `${FONT_SIZE.sectionTitle}px`,
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
        <Box display={'flex'} gap="12px" mt={'24px'} flexDirection={'column'}>
          <Box display={'flex'} justifyContent={'center'} gap="12px">
            <Box
              width={'55px'}
              height={'55px'}
              borderRadius={'50%'}
              sx={{
                border: '0.1px solid #0000000f',
                boxSizing: 'border-box',
                backgroundColor: '#e8ded4',
              }}
            ></Box>
            <Box
              width={'55px'}
              height={'55px'}
              borderRadius={'50%'}
              sx={{ backgroundColor: '#e4baa3' }}
            ></Box>
            <Box
              width={'55px'}
              height={'55px'}
              borderRadius={'50%'}
              sx={{ backgroundColor: '#e2cbbd' }}
            ></Box>
            <Box
              width={'55px'}
              height={'55px'}
              borderRadius={'50%'}
              sx={{ backgroundColor: '#ccc2c1' }}
            ></Box>
            <Box
              width={'55px'}
              height={'55px'}
              borderRadius={'50%'}
              sx={{ backgroundColor: '#a68b80' }}
            ></Box>
          </Box>
          <Box display={'flex'} justifyContent={'center'} gap="12px">
            <Box
              width={'55px'}
              height={'55px'}
              borderRadius={'50%'}
              sx={{ backgroundColor: '#c8aca0' }}
            ></Box>
            <Box
              width={'55px'}
              height={'55px'}
              borderRadius={'50%'}
              sx={{ backgroundColor: '#d1937c' }}
            ></Box>
            <Box
              width={'55px'}
              height={'55px'}
              borderRadius={'50%'}
              sx={{ backgroundColor: '#999b85' }}
            ></Box>
            <Box
              width={'55px'}
              height={'55px'}
              borderRadius={'50%'}
              sx={{ backgroundColor: '#8b9187' }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
