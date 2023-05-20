import BannerWithText from "@/components/BannerWithText";
import JoinBanner from "@/components/JoinBanner";
import LetsChatForm from "@/components/LetsChatForm";
import PudoBenefits from "@/components/PudoBenefits";
import PudoPoints from "@/components/PudoPoints";
import StorePudoPoints from "@/components/StorePudoPoints";

const Join = () => {
  return (
    <main>
      <JoinBanner />
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

export default Join;
