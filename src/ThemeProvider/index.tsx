'use client';

import theme from '@/ThemeProvider/theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { PropsWithChildren } from 'react';


function ThemeProvider({ children }: PropsWithChildren<{}>) {
  return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
  );
}
export default ThemeProvider;
