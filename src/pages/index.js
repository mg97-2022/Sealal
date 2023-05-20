import MainBannerWithText from "../components/MainBannerWithText";
import HomePageShipping from "../components/HomePageShipping";
import BannerWithText from "../components/BannerWithText";
import DeliveryPartner from "../components/DeliveryPartner";
import WhyUs from "@/components/WhyUs";
import CustomersReviews from "@/components/CustomersReviews";

const Home = () => {
  return (
    <main>
      <MainBannerWithText
        extraHeading="fastShipping"
        heading="lastMile"
        description="doorToDoor"
        bannerSrc="/home-banner.png"
        bannerWidth={1090}
        bannerHeight={700}
        buttonText="contactUs"
        link="contact-us"
      />
      <DeliveryPartner />
      <WhyUs />
      <HomePageShipping />
      <BannerWithText
        title={"home1Title"}
        imgSrc="/home1.png"
        imgHeight={373}
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
};

export default Home;
