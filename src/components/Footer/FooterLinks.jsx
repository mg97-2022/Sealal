import FooterAboutUs from "./FooterAboutUs";
import FooterGetInTouch from "./FooterGetInTouch";
import FooterList from "./FooterList";

const usefulLinks = ["about", "blog", "agencies", "contact"];
const helpSupportList = ["login", "myAccount", "subscribe", "contact"];

const FooterLinks = () => {
  return (
    <div className="container grid grid-cols-4 gap-5 justify-between pt-11 pb-12">
      <FooterAboutUs />
      <FooterList title="usefulLinks" list={usefulLinks} />
      <FooterList title="helpSupport" list={helpSupportList} />
      <FooterGetInTouch />
    </div>
  );
};

export default FooterLinks;
