import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text';
import { Checkbox } from './Checkbox';

export default { 
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <div className='flex items-center gap-2'>
        {Story()}
        <Text size="sm">Lembrar de mim por 30 dias</Text>
      </div>
    )
  ],
} as Meta;

export const Default: StoryObj = {};

