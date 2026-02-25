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
        <Typography
          sx={{
            fontSize: '14px',
            fontFamily: FONT.ru.base,
            fontWeight: 500,
            marginTop: '24px',
          }}
          color={COLOR.base}
        >
          Вот пара примеров того, что мы имеем в виду:
        </Typography>
        <Box display={'flex'} gap="12px" flexDirection={'column'}>
          <Box>
            <Typography
              sx={{
                fontSize: '24px',
                fontFamily: FONT.ru.cursive,
                fontWeight: 500,
                marginTop: '24px',
              }}
              color={COLOR.base}
            >
              Леди
            </Typography>
            <Box display={'flex'} gap="12px" mt={'8px'} flexDirection={'column'}>
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
                  sx={{ backgroundColor: '#ecc3bd' }}
                ></Box>
                <Box
                  width={'55px'}
                  height={'55px'}
                  borderRadius={'50%'}
                  sx={{ backgroundColor: '#bec49e' }}
                ></Box>
                <Box
                  width={'55px'}
                  height={'55px'}
                  borderRadius={'50%'}
                  sx={{ backgroundColor: '#e3dfa3' }}
                ></Box>
                <Box
                  width={'55px'}
                  height={'55px'}
                  borderRadius={'50%'}
                  sx={{ backgroundColor: 'rgb(195 208 224)' }}
                ></Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: '24px',
                fontFamily: FONT.ru.cursive,
                fontWeight: 500,
                marginTop: '24px',
              }}
              color={COLOR.base}
            >
              Джентельмены
            </Typography>
            <Box display={'flex'} gap="12px" mt={'8px'} flexDirection={'column'}>
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
                  sx={{ backgroundColor: '#000000cf' }}
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
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
