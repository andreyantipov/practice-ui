import { ReactStateButton } from './ReactStateButton';

export default {
  title: 'Button/ReactStateButton',
  component: ReactStateButton,
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
    label: 'ReactStateButton',
  },
};
