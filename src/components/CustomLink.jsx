import Link from "next/link";
import LangUtils from "@/utils/language";

const CustomLink = ({ bgColor, link, className, children }) => {
  return (
    <Link
      href={link}
      className={`${
        bgColor ? bgColor : "bg-primary"
      } block px-[40px] md:px-[60px] lg:px-[85px] py-1 md:py-2 lg:py-3  w-fit mx-auto rounded-full text-white font-medium text-sm md:text-base leading-[36px] whitespace-nowrap cursor-pointer ${className} `}
    >
      {LangUtils.FetchWord(children)}
    </Link>
  );
};

export default CustomLink;
