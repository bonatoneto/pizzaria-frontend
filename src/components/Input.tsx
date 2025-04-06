import { InputHTMLAttributes } from 'react';

type InputProps = {
  label?: string;
  ref?: React.Ref<HTMLInputElement | null>;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  name,
  placeholder,
  type,
  id,
  ref,
  ...rest
}: InputProps) {
  return (
    <div className="flex flex-col gap-1 text-soft-gray">
      <label className="font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        className="p-3 w-full border rounded-sm border-soft-gray text-soft-gray placeholder:text-soft-gray outline-none placeholder:opacity-50"
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        ref={ref}
        {...rest}
      />
    </div>
  );
}
