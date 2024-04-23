import { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from '../components/MyLabel';

const meta = {
  title: 'UI/MyLabel',
  component: MyLabel,
  tags: [ 'autodocs' ],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: { control: 'inline-radio' },
    fontColor: { control: 'color' },
    color: { control: 'radio' }

  }

} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic label'
  }
};
export const AllCaps: Story = {
  args: {
    label: 'All caps',
    allCaps: true,
  }
};
export const Secondary: Story = {
  args: {
    label: 'Secondary Label',
    color: 'text-secondary'
  }
};
export const CustomColor: Story = {
  args: {
    label: 'Custom Color Label',
    fontColor: '#5517AC'
  }
};
export const CustomBackgroundColor: Story = {
  args: {
    label: 'Custom Background Color',
    fontColor: '#FFF',
    backgroundColor: 'black'
  }
};