import IntegratedPartners from "@/components/IntegratedPartners";
import KeenToKnow from "@/components/KeenToKnow";
import LetsWork from "@/components/LetsWork";
import MainBannerWithText from "@/components/MainBannerWithText";

const services = () => {
  return (
    <mai>
      <MainBannerWithText
        reverse="flex-row-reverse"
        sectionHeight="h-[559px]"
        contentTop="top-[120px]"
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
    </mai>
  );
};

export default services;
