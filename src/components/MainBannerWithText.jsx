import Image from "next/image";
import Overlay from "./Overlay";
import LangUtils from "@/utils/language";
import Button from "./Button";
import CustomLink from "./CustomLink";

const MainBannerWithText = ({
  reverse,
  extraHeading,
  heading,
  description,
  descMarginBottom,
  bannerSrc,
  bannerWidth,
  bannerHeight,
  buttonText,
  buttonColor,
  buttonClassName,
  buttonType,
  onClick,
  link,
  backgroundColor,
}) => {
  let content;
  if (link) {
    content = (
      <CustomLink link={link} bgColor={buttonColor} className={buttonClassName}>
        {buttonText}
      </CustomLink>
    );
  } else {
    content = (
      <Button
        button={buttonText}
        onClick={onClick}
        buttonColor={buttonColor}
        className={buttonClassName}
        type={buttonType}
      />
    );
  }

  return (
    <section className={`${backgroundColor} mb-20`}>
      <div className="container-lg">
        <div
          className={`flex items-center justify-between gap-3 pt-[160px] lg:pt-[200px] lg:gap-5 ${reverse}`}
        >
          <div className="text-center w-[300px] min-w-[250px] lg:w-[450px]">
            {extraHeading && (
              <h4 className="text-base md:text-xl lg:text-2xl text-secondary leading-7">
                {LangUtils.FetchWord(extraHeading)}
              </h4>
            )}
            <h1 className="uppercase text-primary font-semibold text-[24px] md:text-[30] lg:text-[36px] leading-10 mb-4 lg:mb-7 mt-3 lg:mt-6">
              {LangUtils.FetchWord(heading)}
            </h1>
            <p
              className={`leading-7 text-sm md:text-base lg:text-lg text-greyDark ${
                descMarginBottom ? descMarginBottom : "mb-7 md:mb-10 lg:mb-14"
              }`}
            >
              {LangUtils.FetchWord(description)}
            </p>
            {content}
          </div>
          <div className="min-w-[250px]">
            <Image
              className={`h-[${bannerHeight}px] object-contain`}
              src={bannerSrc}
              alt="banner"
              width={bannerWidth}
              height={bannerHeight}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBannerWithText;
