import { Star } from '@mui/icons-material';
import { palette } from '../theme/components';
import { Box, Typography } from '@mui/material';

type Props = {
  value: string | number;
  of: string | number;
};

function Rating({ value, of }: Props) {
  return (
    <Box display="flex" alignItems="center" gap={0.5}>
      <Star sx={{ fontSize: 18, color: palette.warning.main }} />
      <Typography fontWeight="600" variant="subtitle1">
        {`${value}/${of}`}
      </Typography>
    </Box>
  );
}

Rating.defaultProps = {};

export default Rating;
