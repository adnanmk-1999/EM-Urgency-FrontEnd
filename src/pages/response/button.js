import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

 function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Response</Button>
    </Stack>
  );
}
export default BasicButtons;