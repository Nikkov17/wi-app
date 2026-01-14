import { useState } from 'react';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ru } from 'date-fns/locale';
import { Box, Typography } from '@mui/material';
import { COLOR, FONT, CSS_VALUES, EVENT_DATE } from '../../constants';

export const Calendar = () => {
  const [selectedDate] = useState(EVENT_DATE);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box',
        padding: `${CSS_VALUES.sectionIndent}px`,
        backgroundColor: COLOR.light,
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
            fontFamily: FONT.ru.base,
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '16px',
          }}
          color={COLOR.milkWhite}
        >
          Июнь 2026
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
          <StaticDatePicker
            sx={{
              backgroundColor: 'transparent',
              '& .MuiDateCalendar-root': {
                height: 'auto',
              },
              '& .MuiPickersSlideTransition-root': {
                minHeight: '200px',
              },
              '& .MuiPickersDay-today': {
                border: `1px dashed  ${COLOR.milkWhite} !important`,
              },
              '& .MuiTypography-root, & .MuiPickersDay-root': {
                fontFamily: FONT.ru.base,
                color: COLOR.milkWhite,
                fontWeight: 500,
              },
              '& .MuiDayCalendar-weekDayLabel': {
                fontWeight: 600,
              },
              '& .MuiPickersDay-root.Mui-selected': {
                fontWeight: 700,
                color: COLOR.light,
                backgroundColor: COLOR.milkWhite,
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
    </Box>
  );
};
