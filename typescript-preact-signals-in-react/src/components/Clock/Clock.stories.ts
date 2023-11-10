import { Clock } from './Clock';

export default {
  title: 'Clock',
  component: Clock,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Clock',
  },
};
