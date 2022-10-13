import { spacing } from '@mui/system';
import palette from './palette';

export const MuiTab = {
  styleOverrides: {
    root: {
      color: palette.text.primary,
      fontSize: 18,
      fontWeight: 600,
      lineHeight: '140%',
      textTransform: 'inherit',
      ...spacing({ px: 2, py: 3.5 })
    },
  },
};

export const MuiTabs = {
  styleOverrides: {
    indicator: {
      height: 4
    },
  },
};
