import Image from "next/image";
import LangUtils from "../utils/language";

const PudoPointsCard = ({ imgSrc, step, title, description }) => {
  return (
    <div className="text-center">
      <Image className="mx-auto mb-8" src={imgSrc} alt={title} width={295} height={295} />
      <h4 className="text-secondary capitalize font-medium text-lg">
        {LangUtils.FetchWord(step)}
      </h4>
      <h3 className="text-primary uppercase text-[22px] font-medium mt-4 mb-7">
        {LangUtils.FetchWord(title)}
      </h3>
      <p className="text-greyDark text-lg">
        {LangUtils.FetchWord(description)}
      </p>
    </div>
  );
};

export default PudoPointsCard;
