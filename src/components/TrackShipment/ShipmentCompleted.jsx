import LangUtils from "@/utils/language";

const ShipmentCompleted = () => {
  return (
    <p className="text-center md:text-lg lg:text-[22px] text-primary font-semibold first-letter:capitalize">
      {LangUtils.FetchWord("orderCongratulations")}
    </p>
  );
};

export default ShipmentCompleted;
