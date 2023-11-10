import { PreactSignalButton } from './PreactSignalButton';

export default {
  title: 'Button/PreactSignalButton',
  component: PreactSignalButton,
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
    label: 'PreactSignalButton',
  },
};
