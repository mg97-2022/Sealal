import LangUtils from "@/utils/language";

const ShippingPagesHeading = ({ heading }) => {
  return (
    <h3 className="text-lg font-semibold text-primaryLight mb-9 first-letter:capitalize">
      {LangUtils.FetchWord(heading)}
    </h3>
  );
};

export default ShippingPagesHeading;
