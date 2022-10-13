import palette from './palette';
import deepmerge from '../utils/deepmerge';
import { responsiveProperty } from '@mui/material/styles/cssUtils';
import { BORDER_RADIUS } from '../constants';

export const MuiInput = {
  styleOverrides: {
    root: {
      padding: '5px 14px',
      borderRadius: BORDER_RADIUS,
      backgroundColor: palette.common.white,
      '&:before': {
        display: 'none',
      },
      '&:after': {
        display: 'none',
      },
    },
  },
};

export const MuiFilledInput = {
  styleOverrides: {
    root: {
      background: 'none',

      '&:before': {
        display: 'none',
      },
    },
    input: {
      padding: 0,
      ...deepmerge(
        responsiveProperty({
          cssProperty: 'fontSize',
          min: 14,
          max: 18,
          unit: 'px',
        }),
        responsiveProperty({
          cssProperty: 'lineHeight',
          min: 20,
          max: 22,
          unit: 'px',
        })
      ),
    },
  },
};

export const MuiOutlinedInput = {
  styleOverrides: {
    root: {
      borderRadius: BORDER_RADIUS,
      '&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline':
        {
          borderColor: palette.grey[700],
          borderWidth: '1px',
        },

      '& .MuiSvgIcon-root': {
        color: palette.text.primary,
      },
    },
  },
};

export const MuiInputAdornment = {
  styleOverrides: {
    root: {
      color: palette.text.primary,
      margin: 0,
    },
  },
};

export const MuiInputLabel = {
  styleOverrides: {
    root: {
      color: palette.text.primary,
      fontWeight: '600',
    },
  },
};
