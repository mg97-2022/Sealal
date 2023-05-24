import Image from "next/image";
import Button from "./Button";
import LangUtils from "@/utils/language";

const JoinBanner = () => {
  return (
    <section className="bg-[#fef9f0] h-[720px]">
      <div className="relative top-[120px] pl-10 pr-5">
        <div className="flex items-center gap-10 lg:gap-24">
          <div className="min-w-[250px]">
            <Image
              className="h-[600px] object-contain lg:object-fill"
              src={"/delivery-car.png"}
              alt="banner"
              width={1042}
              height={600}
            />
          </div>
          <div className="text-center w-[450px] w-min-[450px]">
            <h1 className="uppercase text-primary font-semibold text-[24px] md:text-[30] lg:text-[36px] leading-10 mb-7 mt-6">
              {LangUtils.FetchWord("joinOurPudo")}
            </h1>
            <p className="leading-7 text-sm md:text-base lg:text-lg text-greyDark mb-14">
              {LangUtils.FetchWord("bePartOfPudo")}
            </p>
            <Button
              button="submit"
              onClick={() => {}}
              buttonColor="bg-secondaryDark"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinBanner;
