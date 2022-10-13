import { spacing } from '@mui/system';
import palette from './palette';
import { transparentize } from 'polished';
import shadows from './shadows';

export const MuiDialog = {
  styleOverrides: {
    root: {
      '& .MuiBackdrop-root': {
        background: transparentize(0.45, palette.grey.main),
      },
    },
    paper: {
      ...spacing({ p: 4 }),
      borderRadius: 12,
      boxShadow: shadows[2],
    },
  },
};

export const MuiDialogTitle = {
  styleOverrides: {
    root: {
      ...spacing({ pt: 0, pb: 3, pl: 0, pr: 0 }),
    },
  },
};

export const MuiDialogContent = {
  styleOverrides: {
    root: {
      ...spacing({ pt: 4, pb: 4, pl: 0, pr: 0 }),
    },
    dividers: {
      borderLeft: 0,
      borderRight: 0,
      borderStyle: 'dashed',
    },
  },
};

export const MuiDialogActions = {
  styleOverrides: {
    root: {
      ...spacing({ pt: 3, pb: 0, pl: 0, pr: 0 }),
      justifyContent: 'center',
    },
  },
};
