import React from 'react';
import { Box, Card, CardContent, IconButton, Typography, useMediaQuery } from '@mui/material';
import { PushPin, School, LibraryBooks } from '@mui/icons-material';
import { Rating, RCS } from '../components';
import theme from '../theme/theme';

type Props = {
};

function CardExample({ }: Props) {
  const tabletAndUp = useMediaQuery((theme: any) => theme.breakpoints.up('sm'));

  const renderActionButtons = (
    <Box display="flex" alignContent="center" pr={[0, 3]} gap={0.5}>
      <IconButton
        onClick={() => {
          console.log(1);
        }}
      >
        <School
          fontSize={tabletAndUp ? 'large' : 'medium'}
          sx={{ color: theme.palette.success.main }}
        />
      </IconButton>
      <IconButton
        onClick={() => {
          console.log(2);
        }}
      >
        <PushPin
          fontSize={tabletAndUp ? 'large' : 'medium'}
          sx={{ color: theme.palette.warning.main }}
        />
      </IconButton>
    </Box>
  );

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1,
      }}
    >
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={1.5}
        >
          <Rating of="5" value="3" />
          <RCS visible="mobile">
            {renderActionButtons}
          </RCS>
        </Box>
        <Box display="flex" alignItems="center" gap={1.5}>
          <LibraryBooks color="primary" />
          <Typography variant="h4">История и цивилизация</Typography>
        </Box>
      </CardContent>
      <RCS hidden="mobile">
        {renderActionButtons}
      </RCS>
    </Card>
  );
}

CardExample.defaultProps = {
};

export default CardExample;
