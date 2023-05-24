import LangUtils from "@/utils/language";

const FooterAboutUs = () => {
  return (
    <div>
      <h5 className="md:text-lg font-bold leading-7 mb-5 first-letter:capitalize">
        {LangUtils.FetchWord("aboutUs")}
      </h5>
      <p className="text-sm lg:text-base">{LangUtils.FetchWord("aboutUsDescription")}</p>
    </div>
  );
};

export default FooterAboutUs;
