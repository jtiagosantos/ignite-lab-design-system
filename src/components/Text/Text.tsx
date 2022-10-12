import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

//types
import type { TextProps } from './types'

export function Text({ size = 'md', children, asChild, className }: TextProps) {
  const Component = asChild ? Slot : 'span';

  return (
    <Component 
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className,
      )}
    >
      {children}
    </Component>
  );
}