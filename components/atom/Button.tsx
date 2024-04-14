export default function Button({
  text,
  onClick,
  isPrimary,
}: {
  text: string;
  onClick?: () => void;
  isPrimary?: boolean;
}) {
  return (
    <button
      className={`py-2 px-4 text-white rounded-full flex-1 w-full text-nowrap  ${
        isPrimary ? "bg-primary" : "bg-[#ff53ab]"
      }`}
      onClick={onClick}>
      {text}
    </button>
  );
}
