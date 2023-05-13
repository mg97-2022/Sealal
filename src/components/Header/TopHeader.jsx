import LangUtils from "../../utils/language";

const TopHeader = () => {
  return (
    <div className=" bg-primary flex justify-center items-center h-10">
      <div className="container flex align-middle justify-between text-white text-[15px]">
        <p className="">{LangUtils.FetchWord("expressDelivery")}</p>
        <ul className="flex uppercase gap-10">
          <li>{LangUtils.FetchWord("downloadApp")}</li>
          <li>{LangUtils.FetchWord("locatePoints")}</li>
          <li>{LangUtils.FetchWord("trackParcel")}</li>
          <li>{LangUtils.FetchWord("merchantLogin")}</li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
