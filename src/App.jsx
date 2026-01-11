import { Box } from '@mui/material';
import { Heading } from './components/Heading/Heading';
import { Location } from './components/Location/Location';
import { Timing } from './components/Timing/Timing';
import { DressCode } from './components/DressCode/DressCode';
import { Details } from './components/Details/Details';
import { Form } from './components/Form/Form';
import { Contacts } from './components/Contacts/Contacts';
import { Final } from './components/Final/Final';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <Heading />
      <Location />
      <Timing />
      <DressCode />
      <Details />
      <Form />
      <Contacts />
      <Final />
    </Box>
  );
}

export default App;
