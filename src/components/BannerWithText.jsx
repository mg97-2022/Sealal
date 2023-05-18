import Image from "next/image";
import ShareIcon from "./icons/ShareIcon";
import LangUtils from "../utils/language";

const BannerWithText = ({
  title,
  titleClassName,
  imgSrc,
  imgWidth,
  imgHeight,
  descriptions,
  showDescriptionIcon,
  greyBackground,
  reverse,
  verticalPadding,
}) => {
  return (
    <section
      className={`${greyBackground ? "bg-greyLightFirst" : "bg-white"} ${
        verticalPadding ? verticalPadding : "py-20"
      }`}
    >
      <div
        className={`${
          reverse && "flex-row-reverse"
        } container flex items-center justify-between gap-20`}
      >
        <div className="max-w-[675px]">
          <h3
            className={`${titleClassName} text-[22px] font-medium text-primary leading-[36px] uppercase mb-6`}
          >
            {LangUtils.FetchWord(title)}
          </h3>
          {LangUtils.FetchWord(descriptions).map((description) => (
            <p
              key={description}
              className={`flex items-start mb-4 leading-[24px]`}
            >
              {showDescriptionIcon && <ShareIcon className="min-w-max" />}
              {description}
            </p>
          ))}
        </div>
        <Image
          className={`h-[${imgHeight}px]`}
          src={imgSrc}
          alt={LangUtils.FetchWord(title)}
          width={imgWidth}
          height={imgHeight}
        />
      </div>
    </section>
  );
};

export default BannerWithText;
