import { transparentize } from 'polished';
import { spacing } from '@mui/system';
import palette from './palette';
import { BORDER_RADIUS_LARGE } from '../constants';

export const MuiAccordion = {
  styleOverrides: {
    root: {
      boxShadow: 'none',

      '&.Mui-expanded': {
        margin: 0,
        borderTop: `1px dashed ${transparentize(0.88, palette.common.black)}`
      },

      '&:first-of-type': {
        borderTopLeftRadius: BORDER_RADIUS_LARGE,
        borderTopRightRadius: BORDER_RADIUS_LARGE,
        borderTop: 'none',

        '& .Mui-expanded': {
          borderTopLeftRadius: BORDER_RADIUS_LARGE,
          borderTopRightRadius: BORDER_RADIUS_LARGE,
        }
      },

      '&:before': {
        borderTop: `1px dashed ${transparentize(0.88, palette.common.black)}`,
        background: 'none'
      },
    },
  },
};

export const MuiAccordionSummary = {
  styleOverrides: {
    root: {
      ...spacing({ 'px': 3, 'py': 5 }),
      margin: 0,

      '&.Mui-expanded': {
        borderBottom: `1px dashed ${transparentize(0.88, palette.common.black)}`,
        ...spacing({ 'py': 2 }),
        background: '#F8F9FA'
      }
    },
    content: {
      '&.Mui-expanded': {
        margin: 0
      }
    }
  }
}

export const MuiAccordionDetails = {
  styleOverrides: {
    root: {
      ...spacing({ 'p': 0 })
    }
  }
}
