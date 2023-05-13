import LangUtils from "../../utils/language";

const FooterAboutUs = () => {
  return (
    <div>
      <h5 className="text-lg font-bold leading-7 mb-5 first-letter-capitalize">
        {LangUtils.FetchWord("aboutUs")}
      </h5>
      <p>{LangUtils.FetchWord("aboutUsDescription")}</p>
    </div>
  );
};

export default FooterAboutUs;
