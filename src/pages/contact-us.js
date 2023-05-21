import ContactUs from "@/components/ContactUs";
import ContactUsBanner from "@/components/ContactUsBanner";
import LetsChatForm from "@/components/LetsChatForm";
import MainBannerWithText from "@/components/MainBannerWithText";

const contactUs = () => {
  return (
    <main>
      <ContactUsBanner />
      <ContactUs />
      <LetsChatForm />
    </main>
  );
};

export default contactUs;
