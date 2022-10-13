import palette from './palette';
import typography from './typography';
import { BORDER_RADIUS } from '../constants';
import shadows from './shadows';

export default {
  styleOverrides: {
    root: {
      background: '#FFF',
      boxShadow: shadows[4],
      border: '0',
      borderRadius: BORDER_RADIUS,
    },
    main: {
      borderRadius: BORDER_RADIUS,
    },
    columnHeaders: {
      position: 'static',
      minHeight: 'auto !important',
      borderBottom: `2px solid ${palette.primary.main}`,
      borderTopLeftRadius: BORDER_RADIUS,
      borderTopRightRadius: BORDER_RADIUS,
    },
    columnHeader: {
      borderLeft: `1px dashed ${palette.common.white}`,
      minHeight: '30px',
      color: palette.common.white,
      '&:first-of-type': {
        border: 'none',
      },
    },
    columnHeadersInner: {
      background: palette.primary[700],
      lineHeight: '100%',
    },
    columnSeparator: {
      display: 'none',
    },
    virtualScroller: {
      marginTop: '0 !important',
    },
    row: {
      '&:hover': {
        background: 'inherit',
      },
      '&:first-of-type': {
        '.MuiDataGrid-cell': {
          borderTop: 0,
        },
      },
    },
    cell: {
      borderLeft: `1px dashed ${palette.grey[300]}`,
      borderTop: `1px dashed ${palette.grey[300]}`,
      borderBottom: 0,
      fontWeight: '600',
      fontSize: '16px',
      whiteSpace: 'normal !important',
      alignItems: 'stretch',

      '&:first-of-type': {
        borderLeft: 0,
        alignItems: 'center',
      },

      '&:nth-of-type(even)': {
        background: 'rgba(240, 242, 245, 0.5)',
      },

      '&--withRenderer': {
        padding: 0,
      },
    },
  },
};
