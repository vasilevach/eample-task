import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardExample from './card.example';

export default {
  title: 'Example/Card',
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => <div {...args} />;

export const SimpleCard = Template.bind({});
SimpleCard.args = {
  children: (
    <CardExample />
  ),
};
