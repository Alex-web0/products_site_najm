export function SubmitButton({
  label,
  onClick,
  className,
}: {
  onClick: () => void;
  label: string;
  className: string;
}) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={
        className +
        " " +
        "bg-blue-600 hover:bg-blue-700 active:bg-blue-900 text-white px-6 py-2 rounded-full transition-all active:scale-[96%]"
      }
    >
      {label}
    </button>
  );
}
