import { BORDER_RADIUS } from '../constants';
import palette from './palette';

export default {
  styleOverrides: {
    root: {
      background: '#F8F9FA',
      borderRadius: BORDER_RADIUS
    },
    deleteIcon: {
      color: palette.text.primary,
      fontSize: '11px'
    }
  }
}
