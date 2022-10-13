import React from 'react';
import * as FallbackIcons from '../components/fallback';
import { Typography } from '@mui/material';

type Props = {
};

function FallbackExample({ }: Props) {
  const FI: any = FallbackIcons;
  return (
    <>
      {Object.keys(FallbackIcons).map((name) => {
        const Component: any = FI[name];
        return (
          <>
            <Typography>{name}</Typography>
            <Component />
          </>
        );
      })}
    </>
  );
}

FallbackExample.defaultProps = {
};

export default FallbackExample;
