import palette from './palette';
import deepmerge from '../utils/deepmerge';
import { responsiveProperty } from '@mui/material/styles/cssUtils';

export default {
  styleOverrides: {
    root: {
      color: palette.text.primary,
      wordBreak: 'break-word'
    },
    h1: {
      ...deepmerge(
        responsiveProperty({
          cssProperty: 'fontSize',
          min:30,
          max: 44,
          unit: 'px',
        }),
        responsiveProperty({
          cssProperty: 'lineHeight',
          min: 36,
          max: 53,
          unit: 'px',
        })
      )
    },
    h2: {
      ...deepmerge(
        responsiveProperty({
          cssProperty: 'fontSize',
          min: 28,
          max: 36,
          unit: 'px',
        }),
        responsiveProperty({
          cssProperty: 'lineHeight',
          min: 34,
          max: 44,
          unit: 'px',
        })
      )
    },
    h3: {
      fontWeight: 500,
      ...deepmerge(
        responsiveProperty({
          cssProperty: 'fontSize',
          min: 24,
          max: 28,
          unit: 'px',
        }),
        responsiveProperty({
          cssProperty: 'lineHeight',
          min: 28,
          max: 32,
          unit: 'px',
        })
      )
    },
    h4: {
      fontWeight: 500,
      ...deepmerge(
        responsiveProperty({
          cssProperty: 'fontSize',
          min: 22,
          max: 26,
          unit: 'px',
        }),
        responsiveProperty({
          cssProperty: 'lineHeight',
          min: 26,
          max: 32,
          unit: 'px',
        })
      )
    },
    h5: {
      fontWeight: 500,
      ...deepmerge(
        responsiveProperty({
          cssProperty: 'fontSize',
          min: 16,
          max: 20,
          unit: 'px',
        }),
        responsiveProperty({
          cssProperty: 'lineHeight',
          min: 24,
          max: 26,
          unit: 'px',
        })
      )
    },
    h6: {
      fontWeight: 700,
      ...deepmerge(
        responsiveProperty({
          cssProperty: 'fontSize',
          min: 16,
          max: 16,
          unit: 'px',
        }),
        responsiveProperty({
          cssProperty: 'lineHeight',
          min: 19,
          max: 19,
          unit: 'px',
        })
      )
    },
    subtitle1: {
      color: palette.text.secondary
    }
  },
};
