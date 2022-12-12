import { clsx } from 'clsx';

export const threadStyles = {
  base: clsx(
    'border-l-[3px] transition-all duration-100',
    'relative pb-14 rounded-lg group',
    'w-full max-w-screen-lg p-3 max-h-84',
    'overflow-hidden bg-gray cursor-pointer'
  ),
  neutral: 'border-gray',
  active: 'rounded-l-none border-primary shadow-lg',
};
