import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ContentPage from './pages/content-page';

import theme from './theme/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <ContentPage/>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
