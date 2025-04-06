type OrderProps = {
  table: string;
};

export default function Order({ table }: OrderProps) {
  return (
    <div className="relative flex w-full rounded-lg bg-deep-red hover:opacity-70 transition duration-300 ease-in-out cursor-pointer">
      <div className="bg-amber-orange w-3 rounded-tl-lg rounded-bl-lg"></div>
      <span className="p-4 text-soft-gray font-semibold text-lg">{table}</span>
    </div>
  );
}
