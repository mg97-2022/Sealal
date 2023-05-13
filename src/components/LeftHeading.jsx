import LangUtils from "../utils/language";

const LeftHeading = ({ heading, description }) => {
  return (
    <div className="mb-8">
      <h3
        className={`text-[22px] text-primary uppercase font-medium leading-[37px] ${
          description && "mb-3"
        }`}
      >
        {LangUtils.FetchWord(heading)}
      </h3>
      {description && <p className="text-greyDark">{description}</p>}
    </div>
  );
};

export default LeftHeading;
