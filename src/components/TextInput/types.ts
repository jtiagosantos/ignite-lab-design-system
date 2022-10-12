import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
}

export interface TextInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {};

export interface TextInputIconProps extends TextInputRootProps {};
