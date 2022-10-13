import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Typography } from '@mui/material';

export default {
  title: 'Example/Typography',
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => <div {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant='h1' component='div' gutterBottom>
        h1. Heading 44/53
      </Typography>
      <Typography variant='h2' gutterBottom component='div'>
        h2. Heading 36/44
      </Typography>
      <Typography variant='h3' gutterBottom component='div'>
        h3. Heading 28/32
      </Typography>
      <Typography variant='h4' gutterBottom component='div'>
        h4. Heading 26/32
      </Typography>
      <Typography variant='h5' gutterBottom component='div'>
        h5. Heading 20/26
      </Typography>
      <Typography variant='h6' gutterBottom component='div'>
        h6. Heading 16/19
      </Typography>
      <Typography variant='subtitle1' gutterBottom component='div'>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur 16/28
      </Typography>
      <Typography variant='subtitle2' gutterBottom component='div'>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur 14/22
      </Typography>
      <Typography variant='body1' gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam. 16/24
      </Typography>
      <Typography variant='body2' gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam. 14/20
      </Typography>
      <Typography variant='button' display='block' gutterBottom>
        button text
      </Typography>
      <Typography variant='caption' display='block' gutterBottom>
        caption text
      </Typography>
      <Typography variant='overline' display='block' gutterBottom>
        overline text
      </Typography>
    </Box>
  ),
};
