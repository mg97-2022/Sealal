import Image from "next/image";
import SeamlessIntegration from "./SeamlessIntegration";

const ServicesSeamlessIntegration = () => {
  return (
    <section className="container relative mb-[156px]">
      <Image
        className="absolute top-0 left-[50%] translate-x-[-50%]"
        src="/seamlessIntegration.png"
        alt="banner"
        width={472}
        height={849}
      />
      <SeamlessIntegration
        title="seamlessIntegrationFirst"
        description="seamlessIntegrationFirstDesc"
        imgSrc="/services4.png"
        imgWidth={223}
        imgHeight={136}
        containerClassName="justify-end pt-[100px]"
        contentClassName="gap-20"
        textClassName="w-[530px]"
      />
      <SeamlessIntegration
        title="seamlessIntegrationFirst"
        description="seamlessIntegrationFirstDesc"
        imgSrc="/services5.png"
        imgWidth={157}
        imgHeight={145}
        containerClassName="pt-[90px]"
        contentClassName="flex-row-reverse  gap-32"
        textClassName="w-[380px]"
      />
      <SeamlessIntegration
        title="seamlessIntegrationFirst"
        description="seamlessIntegrationFirstDesc"
        imgSrc="/services6.png"
        imgWidth={228}
        imgHeight={152}
        containerClassName="justify-end pt-[50px]"
        contentClassName="gap-20"
        textClassName="w-[380px]"
      />
    </section>
  );
};

export default ServicesSeamlessIntegration;

// title,
//   description,
//   imgSrc,
//   imgWidth,
//   imgHeight,
//   containerClassName,
//   contentClassName,
