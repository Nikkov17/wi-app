import { Typography } from '@mui/material';
import { COLOR, FONT, CSS_VALUES } from '../../constants';

export const Final = () => {
  return (
    <Typography
      sx={{
        fontFamily: FONT.ru.cursive,
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '40px',
        marginTop: `${CSS_VALUES.marginBetweenSections}px`,
        marginLeft: `${CSS_VALUES.sectionSideMargin}px`,
        marginRight: `${CSS_VALUES.sectionSideMargin}px`,
        marginBottom: `${CSS_VALUES.sectionSideMargin}px`,
        maxWidth: `${CSS_VALUES.sectionMaxWidth}px`,
      }}
      color={COLOR.base}
    >
      Будем вас ждать!
      <br /> С любовью,
      <br /> Николай и Виктория.
    </Typography>
  );
};
