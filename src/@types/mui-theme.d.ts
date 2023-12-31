import { PaletteColorOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    customColor: PaletteColorOptions;
    background: PaletteColorOptions;
  }
}
