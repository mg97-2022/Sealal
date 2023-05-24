import Image from "next/image";
import LangUtils from "@/utils/language";

const PudoBenefitsCard = ({
  imgSrc,
  title,
  description,
  imgWidth,
  imgHeight,
}) => {
  return (
    <div className="bg-greyLightThird rounded-[20px] p-5 md:p10 lg:p-14 text-center w-[100%]">
      <div className="flex items-center justify-center min-h-[230px]">
        <Image
          className={`mx-auto h-[${imgHeight}px]`}
          src={imgSrc}
          alt={LangUtils.FetchWord(title)}
          width={imgWidth}
          height={imgHeight}
        />
      </div>
      <h3 className="text-primary font-medium md:text-lg lg:text-[22px] uppercase mt-4 mb-6">
        {LangUtils.FetchWord(title)}
      </h3>
      <p className="text-greyDark text-sm md:text-base">
        {LangUtils.FetchWord(description)}
      </p>
    </div>
  );
};

export default PudoBenefitsCard;
