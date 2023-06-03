import Image from "next/image";
import LangUtils from "@/utils/language";
import { useEffect } from "react";

const SeamlessIntegration = ({
  title,
  description,
  imgSrc,
  imgWidth,
  imgHeight,
  containerClassName,
  contentClassName,
  textClassName,
}) => {
  return (
    <div className={`${containerClassName} flex`}>
      <div
        className={`${contentClassName} gap-10 sm:gap-20 xl:gap-32 flex items-center`}
      >
        <div className="min-w-[220px]">
          <Image
            className={`h-[${imgHeight}px]`}
            src={imgSrc}
            alt="banner"
            width={imgWidth}
            height={imgHeight}
          />
        </div>
        <div className={textClassName}>
          <h4 className="text-[22px] text-primaryLight font-medium mb-2 uppercase">
            {LangUtils.FetchWord(title)}
          </h4>
          <p className="leading-[28px] text-[#333E48]">
            {LangUtils.FetchWord(description)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeamlessIntegration;
