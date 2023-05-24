import Image from "next/image";
import ShareIcon from "./icons/ShareIcon";
import LangUtils from "@/utils/language";

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
          reverse
            ? "flex-col-reverse md:flex-row-reverse"
            : "flex-col md:flex-row"
        } container flex items-center justify-between gap-10 md:gap-15 lg:gap-20`}
      >
        <div>
          <div className="max-w-[675px]">
            <h3
              className={`${titleClassName} md:text-lg lg:text-[22px] font-medium text-primary leading-[36px] uppercase mb-4 md:mb-6`}
            >
              {LangUtils.FetchWord(title)}
            </h3>
            {LangUtils.FetchWord(descriptions).map((description) => (
              <p
                key={description}
                className={`flex items-start mb-4 text-sm md:text-base leading-[24px]`}
              >
                {showDescriptionIcon && <ShareIcon className="min-w-max" />}
                {description}
              </p>
            ))}
          </div>
        </div>
        <div className="min-w-[300px]">
          <Image
            className={`h-[${imgHeight}px]`}
            src={imgSrc}
            width={imgWidth}
            height={imgHeight}
            alt={LangUtils.FetchWord(title)}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerWithText;
