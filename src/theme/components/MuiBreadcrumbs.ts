import palette from './palette';
import { responsiveProperty } from '@mui/material/styles/cssUtils';

export default {
  styleOverrides: {
    root: {
      color: palette.text.secondary
    },
    li: {
      fontSize: 14,
      ...(
        responsiveProperty({
            cssProperty: 'lineHeight',
            min: 20,
            max: 17,
            unit: 'px',
          }
        )
      ),
      '& a': {
        cursor: 'pointer'
      }
    }
  },
};
