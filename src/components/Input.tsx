type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  id: string;
};

export default function Input({ name, placeholder, type, id }: InputProps) {
  return (
    <input
      className="p-3 w-full border rounded-sm border-soft-gray text-soft-gray placeholder:text-soft-gray outline-none"
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
    />
  );
}
