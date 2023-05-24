import IntegratedPartners from "@/components/IntegratedPartners";
import KeenToKnow from "@/components/KeenToKnow";
import LetsWork from "@/components/LetsWork";
import MainBannerWithText from "@/components/MainBannerWithText";
import ServicesSeamlessIntegration from "@/components/ServicesSeamlessIntegration";

const Services = () => {
  return (
    <main>
      <MainBannerWithText
        reverse="flex-row-reverse"
        heading="services"
        description="bePartOfGrowing"
        bannerSrc="/car_with_location.png"
        bannerWidth={800}
        bannerHeight={411}
        buttonText="submit"
        buttonColor="bg-secondary"
        backgroundColor="bg-[#F5EAFF]"
        onClick={() => {}}
      />
      <LetsWork />
      <IntegratedPartners />
      <KeenToKnow />
      <ServicesSeamlessIntegration />
    </main>
  );
};

export default Services;
