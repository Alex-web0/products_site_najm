interface Props {
  label: string;
  type: "outline" | "filled";
  onClicked: () => void;
}

export function PrimaryOrOutlinedButton({ onClicked, label, type }: Props) {
  const commonstyles: string =
    "px-[28px] sm:px-[42px] py-[14px] font-semibold text-[18px]/[20.5px] sm:text-[22px]/[26.5px] rounded-full hover:shadow-md focus:scale-[98%] transition-all active:opacity-75 ";

  return (
    <button
      type="submit"
      className={
        commonstyles +
        (type == "outline"
          ? "border-2 border-gray-400 text-gray-800 "
          : "bg-cyan-600 text-white")
      }
      onClick={onClicked}
    >
      {label}
    </button>
  );
}
