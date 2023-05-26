import LangUtils from "@/utils/language";
import Image from "next/image";
import SearchBar from "./SearchBar";

const FAQBanner = () => {
  return (
    <section className="relative bg-[#F5EAFF] h-[559px]">
      <div className="container relative top-[120px]">
        <div className="flex items-center justify-between gap-5">
          <div className="min-w-[250px]">
            <Image
              className="h-[411px] object-contain"
              src={"/car_with_location.png"}
              alt="banner"
              width={800}
              height={411}
            />
          </div>
          <div className="text-center w-[450px]">
            <h4 className="text-[20px] md:text-[25px] lg:text-[36px] font-bold text-white leading-7 first-letter:capitalize">
              {LangUtils.FetchWord("askAnything")}
            </h4>
            <h1 className="uppercase text-primary font-bold text-[20px] md:text-[24px] lg:text-[28px] leading-10 mb-4 md:mb-5 lg:mb-7 mt-2 md:mt-3">
              {LangUtils.FetchWord("faq")}
            </h1>
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQBanner;
