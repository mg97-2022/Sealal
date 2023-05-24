import LangUtils from "@/utils/language";

const TopHeader = () => {
  return (
    <div className=" bg-primary flex justify-center items-center py-3">
      <div className="container flex align-middle justify-between gap-3 text-white text-xs md:text-sm lg:text-[15px]">
        <p className="">{LangUtils.FetchWord("expressDelivery")}</p>
        <ul className="flex uppercase gap-4 md:gap-6 lg:gap-10">
          <li className="text-center">{LangUtils.FetchWord("downloadApp")}</li>
          <li className="text-center">{LangUtils.FetchWord("locatePoints")}</li>
          <li className="text-center">{LangUtils.FetchWord("trackParcel")}</li>
          <li className="text-center">{LangUtils.FetchWord("merchantLogin")}</li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
