import LangUtils from "@/utils/language";
import Image from "next/image";
import SearchBar from "./SearchBar";

const FAQBanner = () => {
  return (
    <section className="relative bg-[#F5EAFF] h-[559px]">
      <div className="container relative top-[120px]">
        <div className="flex items-center justify-between gap-5">
          <Image
            className="h-[411px]"
            src={"/car_with_location.png"}
            alt="banner"
            width={800}
            height={411}
          />
          <div className="text-center w-[450px] w-min-[450px]">
            <h4 className="text-[35px] font-bold text-white leading-7 first-letter:capitalize">
              {LangUtils.FetchWord("askAnything")}
            </h4>
            <h1 className="uppercase text-primary font-bold text-[28px] leading-10 mb-7 mt-3">
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
