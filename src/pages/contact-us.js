import ContactUs from "@/components/ContactUs";
import LetsChatForm from "@/components/LetsChatForm";
import MainBannerWithText from "@/components/MainBannerWithText";

const contactUs = () => {
  return (
    <main>
      <MainBannerWithText
        reverse="flex-row-reverse"
        sectionHeight="h-[559px]"
        contentTop="top-[120px]"
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
      <ContactUs />
      <LetsChatForm />
    </main>
  );
};

export default contactUs;
