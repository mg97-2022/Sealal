import Image from "next/image";
import Button from "./Button";
import LangUtils from "../utils/language";
import ShareIcon from "./icons/ShareIcon";

const WhyUs = () => {
  return (
    <section className="bg-secondaryVeryLight">
      <div className="container flex items-center justify-between">
        <Image
          src="/delivery-car.png"
          alt="delivery car"
          width={794}
          height={376}
        />
        <div className="text-center">
          <h3 className="capitalize text-secondary font-semibold text-xl mb-7">
            {LangUtils.FetchWord("whyUs")}
          </h3>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1 capitalize font-semibold text-lg text-primary">
              <ShareIcon />
              {LangUtils.FetchWord("effortless")}
            </span>
            <span className="flex items-center gap-1 capitalize font-semibold text-lg text-primary">
              <ShareIcon />
              {LangUtils.FetchWord("efficient")}
            </span>
            <span className="flex items-center gap-1 capitalize font-semibold text-lg text-primary">
              <ShareIcon />
              {LangUtils.FetchWord("seamless")}
            </span>
          </div>
          <span className="block  text-greyDark text-lg my-6">{LangUtils.FetchWord("keenTo")}</span>
          <Button button="contactUs" onClick={() => {}} />
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
