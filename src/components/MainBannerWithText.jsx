import Image from "next/image";
import Overlay from "./Overlay";
import LangUtils from "../utils/language";
import Button from "./Button";

const MainBannerWithText = ({
  reverse,
  sectionHeight,
  contentTop,
  extraHeading,
  heading,
  description,
  descMarginBottom,
  bannerSrc,
  bannerWidth,
  bannerHeight,
  buttonText,
  buttonColor,
  onClick,
  backgroundColor
}) => {
  return (
    <section
      className={`relative ${backgroundColor} ${
        sectionHeight ? sectionHeight : "h-[100vh]"
      }`}
    >
      <div
        className={`container relative ${
          contentTop ? contentTop : "top-[200px]"
        }`}
      >
        <div className={`flex items-center justify-between ${reverse}`}>
          <div className="text-center w-[450px] w-min-[450px]">
            {extraHeading && (
              <h4 className="text-2xl text-secondary leading-7">
                {LangUtils.FetchWord(extraHeading)}
              </h4>
            )}
            <h1 className="uppercase text-primary font-semibold text-[36px] leading-10 mb-7 mt-6">
              {LangUtils.FetchWord(heading)}
            </h1>
            <p
              className={`leading-7 text-lg text-greyDark ${
                descMarginBottom ? descMarginBottom : "mb-14"
              }`}
            >
              {LangUtils.FetchWord(description)}
            </p>
            <Button
              button={buttonText}
              onClick={onClick}
              buttonColor={buttonColor}
            />
          </div>
          <Image
            className={`h-[${bannerHeight}px]`}
            src={bannerSrc}
            alt="banner"
            width={bannerWidth}
            height={bannerHeight}
          />
        </div>
      </div>
    </section>
  );
};

export default MainBannerWithText;
