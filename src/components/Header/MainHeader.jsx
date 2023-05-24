import Image from "next/image";
import Link from "next/link";
import LangUtils from "@/utils/language";
import SupportIcon from "../icons/SupportIcon";

const MainHeader = () => {
  return (
    <div className="text-[15px]">
      <div className="container h-20 flex justify-between items-center">
        <div className="flex justify-start items-center gap-5 md:gap-10 lg:gap-24">
          <Link className="scale-75 md:scale-100 block min-w-[86px]" href="/">
            <Image
              className="h-[29px]"
              src="/logo-2.png"
              alt="Logo"
              width={115}
              height={29}
            />
          </Link>
          <ul className="flex justify-start gap-2 md:gap-4 lg:gap-10 text-primaryLight font-medium">
            <li>
              <Link
                className="capitalize text-primaryLight text-xs md:text-sm font-medium"
                href="/"
              >
                {LangUtils.FetchWord("home")}
              </Link>
            </li>
            <li>
              <Link
                className="capitalize text-primaryLight text-xs md:text-sm font-medium"
                href="/"
              >
                {LangUtils.FetchWord("aboutUs")}
              </Link>
            </li>
            <li>
              <Link
                className="capitalize text-primaryLight text-xs md:text-sm font-medium"
                href="/join"
              >
                {LangUtils.FetchWord("pudoSignup")}
              </Link>
            </li>
            <li>
              <Link
                className="capitalize text-primaryLight text-xs md:text-sm font-medium"
                href="/"
              >
                {LangUtils.FetchWord("blog")}
              </Link>
            </li>
            <li>
              <Link
                className="capitalize text-primaryLight text-xs md:text-sm font-medium"
                href="contact-us"
              >
                {LangUtils.FetchWord("contactUs")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px] flex items-center justify-center bg-greyLightFirst rounded-full">
            <SupportIcon />
          </span>
          <div className="flex flex-col">
            <div>
              <span className="font-semibold text-xs  lg:text-base">
                {LangUtils.FetchWord("support")}
              </span>
              <span className="font-medium text-xs lg:text-base"> (+000) 12345678912</span>
            </div>
            <div>
              <span className="font-semibold text-xs lg:text-base">
                {LangUtils.FetchWord("email")}:
              </span>
              <span className="font-medium text-xs lg:text-base"> Exampel@Exampel.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
