import palette from './palette';
import { transparentize } from 'polished';
import { BORDER_RADIUS } from '../constants';
import shadows from './shadows';

const MuiTooltip = {
  styleOverrides: {
    tooltip: {
      backgroundColor: palette.common.white,
      boxShadow: shadows[4],
      color: palette.text.secondary,
      borderRadius: BORDER_RADIUS,
    },
    arrow: {
      color: palette.common.white,
    },
  },
};

export default MuiTooltip;
