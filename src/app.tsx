import React from 'react';
import { CssBaseline, Typography, ThemeProvider } from '@mui/material';

import theme from './theme/theme';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Typography>App goes here</Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
