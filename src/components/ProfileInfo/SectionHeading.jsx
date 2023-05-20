import LangUtils from "../../utils/language";

const SectionHeading = ({ heading }) => {
  return (
    <h4
      className="text-lg font-semibold text-[
        #363636] first-letter:capitalize"
    >
      {LangUtils.FetchWord(heading)}
    </h4>
  );
};

export default SectionHeading;
