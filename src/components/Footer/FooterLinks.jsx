import FooterAboutUs from "./FooterAboutUs";
import FooterGetInTouch from "./FooterGetInTouch";
import FooterList from "./FooterList";

const usefulLinks = [
  {
    title: "about",
    link: "about",
  },
  {
    title: "blog",
    link: "blog",
  },
  {
    title: "agencies",
    link: "agencies",
  },
  {
    title: "contact",
    link: "contact-us",
  },
];
const helpSupportList = [
  {
    title: "login",
    link: "login",
  },
  {
    title: "myAccount",
    link: "profile",
  },
  {
    title: "subscribe",
    link: "subscribe",
  },
  {
    title: "contact",
    link: "contact-us",
  },
];

const FooterLinks = () => {
  return (
    <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8 justify-between pt-11 pb-12">
      <FooterAboutUs />
      <FooterList title="usefulLinks" list={usefulLinks} />
      <FooterList title="helpSupport" list={helpSupportList} />
      <FooterGetInTouch />
    </div>
  );
};

export default FooterLinks;
