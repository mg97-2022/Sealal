import Link from "next/link";
import LangUtils from "@/utils/language";

const CustomLink = ({ bgColor, link, className, children }) => {
  return (
    <Link
      href={link}
      className={`${
        bgColor ? bgColor : "bg-primary"
      } block px-[85px] py-3 w-fit mx-auto rounded-full text-white font-medium leading-[36px] whitespace-nowrap cursor-pointer ${className} `}
    >
      {LangUtils.FetchWord(children)}
    </Link>
  );
};

export default CustomLink;
