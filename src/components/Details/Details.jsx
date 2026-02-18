import { Box, Typography } from '@mui/material';
import { COLOR, FONT, FONT_SIZE, CSS_VALUES } from '../../constants';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { DetailBlock } from './DetailBlock';

export const Details = () => {
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
          ДЕТАЛИ
        </Typography>
        <DetailBlock
          title="Трансфер"
          description="Дорогие гости, для вашего комфорта будет организован трансфер. Если он вам необходим,
          пожалуйста, укажите это в анкете ниже."
          IconProp={AirportShuttleIcon}
        />
        <DetailBlock
          title="Подарки"
          description="Ваши пожелания в конвертах будут лучшими подарками, которые помогут исполнить наши мечты!"
          IconProp={CardGiftcardIcon}
        />
        <DetailBlock
          title="Цветы"
          description="Мы знаем, что на свадьбе принято дарить цветы, но, к сожалению, мы не успеем в полной мере
          насладиться их красотой. Вместо них будем рады бутылочке вашего любимого алкогольного
          напитка для нашего семейного бара."
          IconProp={LocalFloristIcon}
        />
      </Box>
    </Box>
  );
};
