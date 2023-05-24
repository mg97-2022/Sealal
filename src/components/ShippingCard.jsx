import Button from "./Button";
import LangUtils from "@/utils/language";

const ShippingCard = ({
  icon,
  title,
  onClick,
  className,
  description,
  flexDirection,
}) => {
  return (
    <div className={`flex ${flexDirection}`}>
      <div
        className={`text-center px-8 py-10 rounded-[15px] max-w-[450px] box-shadow flex-1 ${className}`}
      >
        <span className="flex items-center justify-center mx-auto bg-greyLightFirst w-[100px] h-[100px] rounded-full mb-5">
          {icon}
        </span>
        <h4 className="text-primary md:text-lg leading-10 font-semibold mb-4 capitalize">
          {LangUtils.FetchWord(title)}
        </h4>
        <p className="text-greyDark text-sm md:text-base leading-[28px] mb-12">
          {LangUtils.FetchWord(description)}
        </p>
        <Button button="shipping" onClick={onClick} />
      </div>
    </div>
  );
};

export default ShippingCard;
