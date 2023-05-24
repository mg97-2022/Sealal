import MainBannerWithText from "./MainBannerWithText";

const ContactUsBanner = () => {
  return (
    <MainBannerWithText
      reverse="flex-row-reverse"
      heading="contactUs"
      description="bePartOfGrowing"
      bannerSrc="/car_with_location.png"
      bannerWidth={800}
      bannerHeight={411}
      buttonText="submit"
      buttonColor="bg-secondary"
      backgroundColor="bg-[#F5EAFF]"
      onClick={() => {}}
    />
  );
};

export default ContactUsBanner;
