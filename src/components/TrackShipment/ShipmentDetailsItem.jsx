import LangUtils from "@/utils/language";

const ShipmentDetailsItem = ({ title, data }) => {
  return (
    <div className="flex flex-col gap-1 items-start">
      <span className="text-secondaryDark text-medium first-letter:capitalize">
        {LangUtils.FetchWord(title)}
      </span>
      <span className="text-sm text-[#2E2E2E]">{data}</span>
    </div>
  );
};

export default ShipmentDetailsItem;
