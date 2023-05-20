import LangUtils from "@/utils/language";
import LocationIcon from "../icons/LocationIcon";
import SmallEmailIcon from "../icons/SmallEmailIcon";
import TelephoneIcon from "../icons/TelephoneIcon";

const FooterGetInTouch = () => {
  return (
    <div>
      <h5 className="text-lg font-bold leading-7 mb-5 first-letter:capitalize">
        {LangUtils.FetchWord("getInTouch")}
      </h5>
      <ul>
        <li className="flex items-start mb-4 gap-2">
          <span className="flex items-center justify-center bg-white w-[27px] h-[27px] rounded-full min-w-[27px]">
            <LocationIcon />
          </span>
          <address className="text-sm">
            333 Middle Winchendon Rd, Rindge, NH 03461
          </address>
        </li>
        <li className="flex items-center mb-4 gap-2">
          <span className="flex items-center justify-center bg-white w-[27px] h-[27px] rounded-full min-w-[27px]">
            <TelephoneIcon />
          </span>
          <div className="flex items-start">
            <a className="text-sm" href="tel:125-711-811">
              125-711-811
            </a>
            <a className="text-sm" href="tel:125-711-811">
              125-711-811
            </a>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <span className="flex items-center justify-center bg-white w-[27px] h-[27px] rounded-full min-w-[27px]">
            <SmallEmailIcon />
          </span>
          <a className="text-sm" href="mailto:Support.cartmax@gmail.com">
            Support.cartmax@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterGetInTouch;
