import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ShowMoreCard from '../components/ShowMoreCard';

export default {
  title: 'Components/ShowMoreCard',
  component: ShowMoreCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ShowMoreCard>;

const Template: ComponentStory<typeof ShowMoreCard> = args => (
  <div>
    <ShowMoreCard {...args}>
      <>
        <p>Cell: 612-532-3462</p>
        <p>Office: 911-911-9111</p>
        <p>Email: mmrousslang@gmail.com</p>
        <p>LinkedIn</p>
      </>
    </ShowMoreCard>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'Test',
  title: 'Test',
  cellPhoneNumber: 'Test',
  officePhoneNumber: 'Test',
  email: 'Test',
  linkedInUrl: 'Test',
  imageUrl: '/images/supreme-overlord.jpg',
};

export const Medium = Template.bind({});
Medium.args = {
  name: 'Test',
  title: 'Test',
  cellPhoneNumber: 'Test',
  officePhoneNumber: 'Test',
  email: 'Test',
  linkedInUrl: 'Test',
  imageUrl: '/images/supreme-overlord.jpg',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  name: 'Test',
  title: 'Test',
  cellPhoneNumber: 'Test',
  officePhoneNumber: 'Test',
  email: 'Test',
  linkedInUrl: 'Test',
  imageUrl: '/images/supreme-overlord.jpg',
  size: 'small',
};
