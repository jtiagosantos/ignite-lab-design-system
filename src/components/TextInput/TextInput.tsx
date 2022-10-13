import { Slot } from '@radix-ui/react-slot';

//types
import type { TextInputRootProps, TextInputFieldProps, TextInputIconProps } from './types'

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  );
}

function TextInputField(props: TextInputFieldProps) {
  return (
    <input 
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

TextInputRoot.displayName = 'TextInput.Root';
TextInputIcon.displayName = 'TextInput.Icon';
TextInputField.displayName = 'TextInput.Field';

export const TextInput = {
  Root: TextInputRoot,
  Field: TextInputField,
  Icon: TextInputIcon,
};