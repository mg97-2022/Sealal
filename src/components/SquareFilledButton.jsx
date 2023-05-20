import LangUtils from "@/utils/language";

const SquareFilledButton = ({ children, type, onClick, className }) => {
  return (
    <button
      className={`first-letter:capitalize whitespace-nowrap text-white font-medium py-2 px-[75px] bg-primaryLight rounded-[10px] ${className}`}
      type={type || "button"}
      onClick={onClick}
    >
      {LangUtils.FetchWord(children)}
    </button>
  );
};

export default SquareFilledButton;
