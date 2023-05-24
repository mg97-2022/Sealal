import LangUtils from "@/utils/language";

const LeftHeading = ({ heading, description }) => {
  return (
    <div className="mb-6 lg:mb-8">
      <h3
        className={`md:text-lg lg:text-[22px] text-primary uppercase font-medium leading-[37px] ${
          description && "mb-3"
        }`}
      >
        {LangUtils.FetchWord(heading)}
      </h3>
      {description && <p className="text-greyDark text-sm md:text-base">{description}</p>}
    </div>
  );
};

export default LeftHeading;
