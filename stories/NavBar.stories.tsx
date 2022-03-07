import React from 'react';
import { Story, Meta } from '@storybook/react';
import NavBar, { NavBarProps } from '../components/NavBar';
import { ComponentStory, ComponentMeta } from '@storybook/react';

console.log(NavBar);

export default {
  title: 'Components/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = args => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.story = {
  parameters: {
    nextRouter: {
      path: '/clients',
      asPath: '/clients',
    },
  },
};
