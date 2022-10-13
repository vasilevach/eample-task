import palette from './palette';
import { BORDER_RADIUS } from '../constants';

export default {
  styleOverrides: {
    root: {
      '&:hover': {
        borderColor: palette.grey[300],
      },
      '& .MuiSelect-icon': {
        color: palette.text.primary,
      }
    },
    select: {
      borderColor: palette.grey[300],
      borderRadius: BORDER_RADIUS,
      color: palette.text.primary,
      fontSize: '14px',
      fontWeight: 500
    },
  },
};
