import Image from "next/image";
import Button from "./Button";
import LangUtils from "@/utils/language";
import ShareIcon from "./icons/ShareIcon";
import CustomLink from "./CustomLink";

const WhyUs = () => {
  return (
    <section className="bg-secondaryVeryLight">
      <div className="container flex items-center justify-between gap-3">
        <div className="min-w-[280px]">
          <Image
            className="h-[376px]"
            src="/delivery-car.png"
            alt="delivery car"
            width={794}
            height={376}
          />
        </div>
        <div className="text-center">
          <h3 className="capitalize text-secondary md:text-xl font-semibold mb-4 lg:mb-7">
            {LangUtils.FetchWord("whyUs")}
          </h3>
          <div className="flex items-center justify-center flex-wrap gap-5">
            <span className="flex items-center gap-1 capitalize font-semibold lg:text-lg text-primary">
              <ShareIcon />
              {LangUtils.FetchWord("effortless")}
            </span>
            <span className="flex items-center gap-1 capitalize font-semibold lg:text-lg text-primary">
              <ShareIcon />
              {LangUtils.FetchWord("efficient")}
            </span>
            <span className="flex items-center gap-1 capitalize font-semibold lg:text-lg text-primary">
              <ShareIcon />
              {LangUtils.FetchWord("seamless")}
            </span>
          </div>
          <span className="block  text-greyDark lg:text-lg my-6">
            {LangUtils.FetchWord("keenTo")}
          </span>
          <CustomLink link="contact-us">contactUs</CustomLink>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

// whyUs: "why US?",
//   effortless: "effortless",
//   efficient: "efficient",
//   seamless: "seamless",
//   keenTo: "keen to know more?",
//   contactUs: "contact us",
