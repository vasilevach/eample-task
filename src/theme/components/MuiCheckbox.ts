import { BORDER_RADIUS_SMALL } from '../constants';
import palette from './palette';

export default {
  styleOverrides: {
    root: {
      '& .MuiSvgIcon-root': {
        backgroundColor: palette.common.white,
        borderRadius: BORDER_RADIUS_SMALL,
      },
    },
  },
};
