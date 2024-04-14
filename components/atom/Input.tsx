export default function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      className="border border-primary rounded-3xl py-2 px-4"
      placeholder={placeholder}
    />
  );
}
