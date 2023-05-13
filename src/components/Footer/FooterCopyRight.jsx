import LangUtils from "../../utils/language";

const FooterCopyRight = () => {
  return (
    <div className="text-center py-5 border-t border-t-primaryVeryLight">{LangUtils.FetchWord("copyRight")}</div>
  );
};

export default FooterCopyRight;
