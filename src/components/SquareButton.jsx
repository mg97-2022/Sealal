import LangUtils from "@/utils/language";

const SquareButton = ({
  children,
  type,
  onClick,
  className,
  textColor,
  bgColor,
}) => {
  return (
    <button
      className={`${className} first-letter:capitalize rounded-[10px] font-medium py-2  whitespace-nowrap ${
        textColor ? textColor : "text-white"
      } ${bgColor ? bgColor : "bg-primaryLight"}`}
      type={type || "button"}
      onClick={onClick}
    >
      {LangUtils.FetchWord(children)}
    </button>
  );
};

export default SquareButton;
