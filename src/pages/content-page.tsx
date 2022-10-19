import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { requestAssignedContentApi } from '../common/api';
import { AssignedContents } from '../types';
import { Typography } from '@mui/material';

type Props = {};

function ContentPage({}: Props) {
  const { data, isLoading } = useQuery<AssignedContents[], Error>(['assignedContent'], requestAssignedContentApi);

  return (
    <Typography>App goes here</Typography>
  );
}

ContentPage.defaultProps = {};

export default ContentPage;
