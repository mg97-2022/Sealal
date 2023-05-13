import Button from "./Button";
import LangUtils from "../utils/language";

const ShippingCard = ({ icon, title, description, onClick }) => {
  return (
    <div
      className="text-center px-8 py-10 rounded-[15px] box-shadow"
    >
      <span className="flex items-center justify-center mx-auto bg-greyLightFirst w-[100px] h-[100px] rounded-full mb-5">
        {icon}
      </span>
      <h4 className="text-primary text-lg leading-10 font-semibold mb-4 capitalize">
        {LangUtils.FetchWord(title)}
      </h4>
      <p className="text-greyDark leading-[28px] mb-12">
        {LangUtils.FetchWord(description)}
      </p>
      <Button button="shipping" onClick={onClick} />
    </div>
  );
};

export default ShippingCard;