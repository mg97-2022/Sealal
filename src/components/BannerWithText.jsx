import Image from "next/image";
import ShareIcon from "./icons/ShareIcon";

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
  contentClassName,
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
        <div  className="max-w-[675px]">
          <h3
            className={`${titleClassName} text-[22px] font-medium text-primary leading-[36px] uppercase mb-6`}
          >
            {title}
          </h3>
          {descriptions.map((description) => (
            <p key={description} className={`flex items-start mb-4 leading-[24px]`}>
              {showDescriptionIcon && <ShareIcon className="min-w-max" />}
              {description}
            </p>
          ))}
        </div>
        <Image
          src={imgSrc}
          alt={title}
          width={imgWidth}
          height={imgHeight}
        />
      </div>
    </section>
  );
};

export default BannerWithText;
