import LangUtils from "../utils/language";

const Button = ({ button, onClick, className, type, buttonColor }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${
        buttonColor ? buttonColor : "bg-primary"
      } px-20 py-3 rounded-full text-white font-medium leading-[36px] cursor-pointer ${className} `}
    >
      {LangUtils.FetchWord(button)}
    </button>
  );
};

export default Button;
