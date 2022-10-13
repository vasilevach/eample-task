import palette from './palette';
import shadows from './shadows';

export default {
  styleOverrides: {
    root: {
      backgroundColor: palette.common.white,
      boxShadow: shadows[1],
      '& svg.MuiSvgIcon-root': {
        color: palette.text.primary,
      },
    },
  },
};
