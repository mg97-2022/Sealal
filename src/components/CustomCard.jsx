import Image from "next/image";
import LangUtils from "@/utils/language";

const CustomCard = ({
  imgSrc,
  imgWidth,
  imgHeight,
  step,
  title,
  description,
}) => {
  return (
    <div className="text-center max-w-[400px] mx-auto">
      <div>
        <Image
          alt={title}
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          className={`mx-auto mb-8 h-[${imgHeight}px]`}
        />
      </div>
      {step && (
        <h4 className="text-secondary capitalize font-medium lg:text-lg">
          {LangUtils.FetchWord(step)}
        </h4>
      )}
      <h3 className="text-primary uppercase md:text-lg lg:text-[22px] font-medium mt-4 mb-7">
        {LangUtils.FetchWord(title)}
      </h3>
      <p className="text-greyDark text-sm md:text-base lg:text-lg">
        {LangUtils.FetchWord(description)}
      </p>
    </div>
  );
};

export default CustomCard;
