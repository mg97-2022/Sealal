import Image from "next/image";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import InstagramIcon from "../icons/InstagramIcon";
import EmailIcon from "../icons/EmailIcon";
import Link from "next/link";

const FooterSocial = () => {
  return (
    <div className="container pt-[46px] pb-[36px] flex items-center justify-between border-b border-b-primaryVeryLight">
      <Link className="scale-75 md:scale-100" href="/">
        <Image
          className="h-[45px]"
          src="/footer-logo.png"
          alt="logo"
          width={177}
          height={45}
        />
      </Link>
      <div className="flex items-center gap-3">
        <a href="">
          <FacebookIcon />
        </a>
        <a href="">
          <TwitterIcon />
        </a>
        <a href="">
          <YoutubeIcon />
        </a>
        <a href="">
          <InstagramIcon />
        </a>
        <a href="">
          <EmailIcon />
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;
