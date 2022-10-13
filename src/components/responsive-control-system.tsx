import React, { ReactNode } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

type Props = {
  children: ReactNode,
  hidden?: 'smallMobile' | 'mobile' | 'tablet' | 'desktop' | 'largeDesktop',
  visible?: 'smallMobile' | 'mobile' | 'tablet' | 'desktop' | 'largeDesktop'
};

function RCS({ children, hidden, visible }: Props) {
  const hiddenSmallMobile = useMediaQuery((theme: any) => theme.breakpoints.up('xs'));
  const hiddenMobile = useMediaQuery((theme: any) => theme.breakpoints.up('sm'));
  const hiddenTablet = useMediaQuery((theme: any) => theme.breakpoints.up('md'));
  const hiddenDesktop = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const hiddenLargeDesktop = useMediaQuery((theme: any) => theme.breakpoints.up('xl'));

  const visibleSmallMobile = useMediaQuery((theme: any) => theme.breakpoints.down('xs'));
  const visibleMobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  const visibleTablet = useMediaQuery((theme: any) => theme.breakpoints.down('md'));
  const visibleDesktop = useMediaQuery((theme: any) => theme.breakpoints.down('lg'));
  const visibleLargeDesktop = useMediaQuery((theme: any) => theme.breakpoints.down('xl'));

  if (hidden === 'smallMobile' && hiddenSmallMobile) {
    return <>{children}</>
  }
  if (hidden === 'mobile' && hiddenMobile) {
    return <>{children}</>
  }
  if (hidden === 'tablet' && hiddenTablet) {
    return <>{children}</>
  }
  if (hidden === 'desktop' && hiddenDesktop) {
    return <>{children}</>
  }
  if (hidden === 'largeDesktop' && hiddenLargeDesktop) {
    return <>{children}</>
  }

  if (visible === 'smallMobile' && visibleSmallMobile) {
    return <>{children}</>
  }
  if (visible === 'mobile' && visibleMobile) {
    return <>{children}</>
  }
  if (visible === 'tablet' && visibleTablet) {
    return <>{children}</>
  }
  if (visible === 'desktop' && visibleDesktop) {
    return <>{children}</>
  }
  if (visible === 'largeDesktop' && visibleLargeDesktop) {
    return <>{children}</>
  }

  return null;

}

RCS.defaultProps = {
};

export default RCS;
