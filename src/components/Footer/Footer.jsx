import FooterContactUs from "./FooterContactUs";
import FooterSocial from "./FooterSocial";
import FooterLinks from "./FooterLinks";
import FooterCopyRight from "./FooterCopyRight";

const Footer = () => {
  return (
    <footer>
      <FooterContactUs />
      <div className="bg-primary text-white">
        <FooterSocial />
        <FooterLinks />
        <FooterCopyRight />
      </div>
    </footer>
  );
};

export default Footer;
