import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#0aa110',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,       // Extra small devices (portrait phones)
      sm: 600,     // Small devices (landscape phones)
      md: 960,     // Medium devices (tablets)
      lg: 1280,    // Large devices (laptops/desktops)
      xl: 1920,    // Extra large devices (large desktops)
    },
  },
});

export default theme;