'use client';

import { useFormStatus } from 'react-dom';

import { tv } from 'tailwind-variants';

type ButtonProps = {
  children: React.ReactNode;
  color: 'primary' | 'secondary';
};

export default function Button({ children, color }: ButtonProps) {
  const { pending } = useFormStatus();

  const buttonStyle = tv({
    base: 'w-full p-3 rounded-sm transition-all font-semibold text-soft-gray cursor-pointer',
    variants: {
      color: {
        primary: 'bg-crimson-red text-soft-gray hover:bg-deep-red',
        secondary: 'bg-olive hover:bg-deep-olive',
      },
    },
  });

  return (
    <button type="submit" disabled={pending} className={buttonStyle({ color })}>
      {children}
    </button>
  );
}
