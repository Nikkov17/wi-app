import { useState } from 'react';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ru } from 'date-fns/locale';
import { Box, Typography } from '@mui/material';
import { COLOR, FONT } from '../../constants';

export const Calendar = () => {
  const [selectedDate] = useState(new Date('2026-06-25'));

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '32px',
      }}
    >
      <Typography
        sx={{
          fontFamily: FONT.ru.base,
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '16px',
        }}
        color={COLOR.base}
      >
        Июнь 2026
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
        <StaticDatePicker
          sx={{
            backgroundColor: 'transparent',
            '& .MuiPickersDay-today': {
              border: `1px dashed  ${COLOR.light} !important`,
            },
            '& .MuiTypography-root, & .MuiPickersDay-root': {
              fontFamily: FONT.ru.base,
              color: COLOR.base,
              fontWeight: 500,
            },
            '& .MuiDayCalendar-weekDayLabel': {
              fontWeight: 600,
            },
            '& .MuiPickersDay-root.Mui-selected': {
              fontWeight: 700,
              color: 'white',
              backgroundColor: COLOR.light,
            },
          }}
          value={selectedDate}
          onChange={() => {}}
          readOnly
          componentsProps={{
            actionBar: { actions: [] },
          }}
          slotProps={{
            toolbar: {
              hidden: true,
            },
          }}
          slots={{
            actionBar: () => null,
            calendarHeader: () => null,
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};
