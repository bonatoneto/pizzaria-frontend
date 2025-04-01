import { tv } from 'tailwind-variants';

type ButtonProps = {
  children: React.ReactNode;
  color: 'primary' | 'secondary';
};

export default function Button({ children, color }: ButtonProps) {
  const buttonStyle = tv({
    base: 'w-full p-3 rounded-sm transition-all text-soft-gray cursor-pointer',
    variants: {
      color: {
        primary: 'bg-crimson-red hover:bg-deep-red',
        secondary: 'bg-olive hover:bg-deep-olive',
      },
    },
  });

  return <button className={buttonStyle({ color })}>{children}</button>;
}
