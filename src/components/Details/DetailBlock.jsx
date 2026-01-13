import { Box, Typography } from '@mui/material';
import { COLOR, FONT } from '../../constants';

export const DetailBlock = ({ title, description, IconProp }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '24px',
        backgroundColor: COLOR.light,
        p: '16px',
        borderRadius: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconProp
          sx={{
            p: '10px',
            borderRadius: '30px',
            backgroundColor: COLOR.milkWhite,
            color: COLOR.light,
          }}
          fontSize="small"
        />
        <Typography
          sx={{
            fontSize: '28px',
            fontFamily: FONT.ru.cursive,
            lineHeight: '50px',
            marginLeft: '8px',
          }}
          color={COLOR.milkWhite}
        >
          {title}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontSize: '14px',
          fontFamily: FONT.ru.base,
          fontWeight: 500,
        }}
        color={COLOR.milkWhite}
      >
        {description}
      </Typography>
    </Box>
  );
};
