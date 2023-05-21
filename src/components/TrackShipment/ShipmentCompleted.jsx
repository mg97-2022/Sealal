import LangUtils from "@/utils/language";

const ShipmentCompleted = () => {
  return (
    <p className="text-center text-[22px] text-primary font-semibold first-letter:capitalize">
      {LangUtils.FetchWord("orderCongratulations")}
    </p>
  );
};

export default ShipmentCompleted;
