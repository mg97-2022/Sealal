import LangUtils from "../../utils/language";

const FooterContactUs = () => {
  return (
    <div className="bg-secondary py-12">
      <div className="container">
        <div className="px-20 flex items-center justify-between">
          <div>
            <h3 className="text-3xl text-primary mb-1 font-extrabold">
              {LangUtils.FetchWord("contactUs")}
            </h3>
            <p className="text-greyDark">
              {LangUtils.FetchWord("contactUsDescription")}
            </p>
          </div>
          <div>form</div>
        </div>
      </div>
    </div>
  );
};

export default FooterContactUs;
