import HomePageShipping from "../components/HomePageShipping";
import BannerWithText from "../components/BannerWithText";
import HomePageBanner from "../components/HomePageBanner";
import DeliveryPartner from "../components/DeliveryPartner";
import WhyUs from "../components/WhyUs";
import CustomersReviews from "../components/CustomersReviews";
import CustomCarousel from "../components/CustomCarousel";
import LangUtils from "../utils/language"

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HomePageBanner />
      <DeliveryPartner />
      <WhyUs />
      <HomePageShipping />
      <BannerWithText
        title={LangUtils.FetchWord("home1Title")}
        imgSrc="/home1.png"
        imgHeight={374}
        imgWidth={610}
        descriptions={LangUtils.FetchWord("home1Descriptions")}
        verticalPadding="py-[60px]"
      />
      <BannerWithText
        title={LangUtils.FetchWord("home2Title")}
        imgSrc="/home2.png"
        imgHeight={334}
        imgWidth={366}
        descriptions={LangUtils.FetchWord("home2Descriptions")}
        showDescriptionIcon
        reverse
        greyBackground
        verticalPadding="py-6"
      />
      <BannerWithText
        title={LangUtils.FetchWord("home3Title")}
        imgSrc="/home3.png"
        imgHeight={400}
        imgWidth={433}
        descriptions={LangUtils.FetchWord("home3Descriptions")}
        showDescriptionIcon
        verticalPadding="py-11"
      />
      <BannerWithText
        title={LangUtils.FetchWord("home4Title")}
        imgSrc="/home4.png"
        imgHeight={383}
        imgWidth={561}
        descriptions={LangUtils.FetchWord("home4Descriptions")}
        reverse
        greyBackground
      />
      <BannerWithText
        title={LangUtils.FetchWord("home5Title")}
        imgSrc="/home5.png"
        imgHeight={372}
        imgWidth={510}
        descriptions={LangUtils.FetchWord("home5Descriptions")}
      />
      <BannerWithText
        title={LangUtils.FetchWord("home6Title")}
        imgSrc="/home6.png"
        imgHeight={377}
        imgWidth={566}
        descriptions={LangUtils.FetchWord("home6Descriptions")}
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
