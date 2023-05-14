import Image from "next/image";
import Link from "next/link";
import LangUtils from "../../utils/language";
import SupportIcon from "../icons/SupportIcon";

const MainHeader = () => {
  return (
    <div className="text-[15px] ">
      <div className="container h-20 flex justify-between items-center">
        <div className="flex justify-start items-center gap-24">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={158}
              height={80}
            />
          </Link>
          <ul className="flex justify-start gap-10 text-primaryLight font-medium">
            <li>
              <Link
                className="capitalize text-primaryLight text-sm font-medium"
                href="/"
              >
                {LangUtils.FetchWord("home")}
              </Link>
            </li>
            <li>
              <Link
                className="capitalize text-primaryLight text-sm font-medium"
                href="/"
              >
                {LangUtils.FetchWord("aboutUs")}
              </Link>
            </li>
            <li>
              <Link
                className="capitalize text-primaryLight text-sm font-medium"
                href="/join"
              >
                {LangUtils.FetchWord("pudoSignup")}
              </Link>
            </li>
            <li>
              <Link
                className="capitalize text-primaryLight text-sm font-medium"
                href="/"
              >
                {LangUtils.FetchWord("blog")}
              </Link>
            </li>
            <li>
              <Link
                className="capitalize text-primaryLight text-sm font-medium"
                href="/"
              >
                {LangUtils.FetchWord("contactUs")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-[50px] h-[50px] flex items-center justify-center bg-greyLightFirst rounded-full">
            <SupportIcon />
          </span>
          <div className="flex flex-col">
            <div>
              <span className="font-semibold">
                {LangUtils.FetchWord("support")}
              </span>
              <span className="font-medium"> (+000) 12345678912</span>
            </div>
            <div>
              <span className="font-semibold">
                {LangUtils.FetchWord("email")}:
              </span>
              <span className="font-medium"> Exampel@Exampel.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
