import { BORDER_RADIUS } from '../constants';

export default {
  styleOverrides: {
    root: {
      borderRadius: BORDER_RADIUS,
      textTransform: 'capitalize',
      fontSize: '12px',
      lineHeight: '140%',
      padding: '8px 18px'
    },
    sizeSmall: {
      height: 25,
      fontSize: 10,
      padding: "0 12px",
      borderRadius: BORDER_RADIUS/2,
      fontWeight: 600
    },
    sizeLarge: {
      height: 37,
      padding: "0 30px",
      fontSize: 16,
    },

   }
 }
