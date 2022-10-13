import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FallbackExample from './fallback.example';

export default {
  title: 'Example/Fallback',
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => <div {...args} />;

export const Fallback = Template.bind({});

Fallback.args = {
  children: <FallbackExample />,
};
