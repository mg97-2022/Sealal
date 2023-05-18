import BannerWithText from "@/components/BannerWithText";
import LetsChatForm from "@/components/LetsChatForm";
import MainBannerWithText from "@/components/MainBannerWithText";
import PudoBenefits from "@/components/PudoBenefits";
import PudoPoints from "@/components/PudoPoints";
import StorePudoPoints from "@/components/StorePudoPoints";

const join = () => {
  return (
    <main>
      <MainBannerWithText
        reverse="flex-row-reverse"
        sectionHeight="h-[700px]"
        contentTop="top-[120px]"
        heading="joinOurPudo"
        description="bePartOfPudo"
        bannerSrc="/delivery-car.png"
        bannerWidth={800}
        bannerHeight={600}
        buttonText="submit"
        buttonColor="bg-secondaryDark"
        backgroundColor="bg-[#fef9f0]"
        onClick={() => {}}
      />
      <PudoPoints />
      <PudoBenefits />
      <StorePudoPoints />
      <BannerWithText
        title={"pudoRequirements"}
        imgSrc="/pudo-requirements.png"
        imgHeight={343}
        imgWidth={548}
        descriptions={"pudoRequirementsDescription"}
        showDescriptionIcon
        verticalPadding="py-16"
      />
      <LetsChatForm />
    </main>
  );
};

export default join;
