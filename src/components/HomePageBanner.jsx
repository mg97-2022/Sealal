import Image from "next/image";
import Overlay from "./Overlay";
import LangUtils from "../utils/language";
import Button from "./Button";

const HomePageBanner = () => {
  return (
    <section className="relative h-[100vh]">
      <Overlay />
      <div className="container relative top-[200px]">
        <div className="flex items-center">
          <div className="text-center w-[450px] w-min-[450px]">
            <h4 className="text-2xl text-secondary leading-7">
              {LangUtils.FetchWord("fastShipping")}
            </h4>
            <h1 className="uppercase text-primary font-semibold text-[36px] leading-10 mb-7 mt-6">
              {LangUtils.FetchWord("lastMile")}
            </h1>
            <p className="leading-7 text-lg text-greyDark mb-14">{LangUtils.FetchWord("doorToDoor")}</p>
            <Button button="contactUs" onClick={() => {}} />
          </div>
          <Image
            src="/home-banner.png"
            alt="banner"
            width={900}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePageBanner;
