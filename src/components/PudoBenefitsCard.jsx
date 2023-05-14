import Image from "next/image";
import LangUtils from "../utils/language";

const PudoBenefitsCard = ({ imgSrc, title, description, imgWidth, imgHeight }) => {
  return (
    <div className="bg-greyLightThird rounded-[20px] p-14 text-center w-[100%]">
      <Image
        className="mx-auto"
        src={imgSrc}
        alt={LangUtils.FetchWord(title)}
        width={imgWidth}
        height={imgHeight}
      />
      <h3 className="text-primary font-medium text-[22px] uppercase mt-4 mb-6">
        {LangUtils.FetchWord(title)}
      </h3>
      <p className="text-greyDark text-base">
        {LangUtils.FetchWord(description)}
      </p>
    </div>
  );
};

export default PudoBenefitsCard;
