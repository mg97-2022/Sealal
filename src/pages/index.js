import MainBannerWithText from "../components/MainBannerWithText";
import HomePageShipping from "../components/HomePageShipping";
import BannerWithText from "../components/BannerWithText";
import DeliveryPartner from "../components/DeliveryPartner";
import WhyUs from "../components/WhyUs";
import CustomersReviews from "../components/CustomersReviews";

export default function Home() {
  return (
    <main>
      <MainBannerWithText
        extraHeading="fastShipping"
        heading="lastMile"
        description="doorToDoor"
        bannerSrc="/home-banner.png"
        bannerWidth={900}
        bannerHeight={700}
        buttonText="contactUs"
        onClick={() => {}}
      />
      <DeliveryPartner />
      <WhyUs />
      <HomePageShipping />
      <BannerWithText
        title={"home1Title"}
        imgSrc="/home1.png"
        imgHeight={374}
        imgWidth={610}
        descriptions={"home1Descriptions"}
        verticalPadding="py-[60px]"
      />
      <BannerWithText
        title={"home2Title"}
        imgSrc="/home2.png"
        imgHeight={334}
        imgWidth={366}
        descriptions={"home2Descriptions"}
        showDescriptionIcon
        reverse
        greyBackground
        verticalPadding="py-6"
      />
      <BannerWithText
        title={"home3Title"}
        imgSrc="/home3.png"
        imgHeight={400}
        imgWidth={433}
        descriptions={"home3Descriptions"}
        showDescriptionIcon
        verticalPadding="py-11"
      />
      <BannerWithText
        title={"home4Title"}
        imgSrc="/home4.png"
        imgHeight={383}
        imgWidth={561}
        descriptions={"home4Descriptions"}
        reverse
        greyBackground
      />
      <BannerWithText
        title={"home5Title"}
        imgSrc="/home5.png"
        imgHeight={372}
        imgWidth={510}
        descriptions={"home5Descriptions"}
      />
      <BannerWithText
        title={"home6Title"}
        imgSrc="/home6.png"
        imgHeight={377}
        imgWidth={566}
        descriptions={"home6Descriptions"}
        reverse
        greyBackground
      />
      <CustomersReviews />
    </main>
  );
}

{
  /* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */
}
