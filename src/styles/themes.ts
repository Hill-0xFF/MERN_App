import { createTheme } from '@mui/material/styles';
import { ptBR as dataGridPtBR } from '@mui/x-data-grid';
import { ptBR as dateTimePtBR } from '@mui/x-date-pickers/locales';

const theme = createTheme(
  {
    palette: {
      primary: {
        light: '#42a5f5',
        main: '#1976d2',
        dark: '#1565c0',
      },
      secondary: {
        light: '#ba68c8',
        main: '#9c27b0',
        dark: '#7b1fa2',
      },
      error: {
        light: '#ef5350',
        main: '#d32f2f',
        dark: '#c62828',
      },
      warning: {
        light: '#ff9800',
        main: '#ed6c02',
        dark: '#e65100',
      },
      info: {
        light: '#03a9f4',
        main: '#0288d1',
        dark: '#01579b',
      },
      success: {
        light: '#4caf50',
        main: '#2e7d32',
        dark: '#1b5e20',
      },
      customColor: {
        light: '#e0f7fa',
        main: '#b2ebf2',
        dark: '#80deea',
      },
    },
  },
  dataGridPtBR,
  dateTimePtBR
);

export default theme;
