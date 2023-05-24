import LangUtils from "@/utils/language";

const Button = ({ button, onClick, className, type, buttonColor }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${
        buttonColor ? buttonColor : "bg-primary"
      } px-14 md:px-20 py-2 md:py-3 rounded-full text-white text-sm md:text-base font-medium leading-[36px] whitespace-nowrap cursor-pointer ${className} `}
    >
      {LangUtils.FetchWord(button)}
    </button>
  );
};

export default Button;
